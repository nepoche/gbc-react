import { auth, db } from '../../firebase';
import { SubmissionError } from 'redux-form';
import store from '../../store';
import { userLoggedIn } from '../../actions';

function submit(values) {

    if (values.account.length !== 42) {
        throw new SubmissionError({ account: 'Invalid Ethereum Address', _error: 'Signup Failed' });
    }

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
                db.doCreateUser(authUser.user.uid, values.email, values.account)
                store.dispatch(userLoggedIn(values.email));
            })
            .catch(error => {
                console.log(error);
                throw new SubmissionError({ _error: 'A user has already registered with that email'});
            });

}

export default submit;