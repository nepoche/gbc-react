import { auth, db } from '../../firebase';
import { SubmissionError } from 'redux-form';
import store from '../../store';
import { fbUserExists } from '../../actions';

function submit(values) {

    // if (!/^\S+@\ufl.edu$/.test(values.email)) {
    //     throw new SubmissionError({ email: 'You need a ufl email to sign into the application'});
    // }

    if (values.password1.length < 6) {
        throw new SubmissionError({ password1: 'Your password must be at least 6 characters'});
    }

    if (values.password1 !== values.password2) {
        throw new SubmissionError({ password2: 'The passwords must match'})
    }

    return auth.doCreateUserWithEmailAndPassword(values.email, values.password1)
            .then((authUser) => {
                db.doCreateUser(authUser.user.uid, values.email)
                store.dispatch(fbUserExists(authUser));
            })
            .catch(error => {
                console.log(error);
                throw new SubmissionError({ _error: 'A user has already registered with that email'});
            });

}

export default submit;