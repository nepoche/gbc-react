import { auth } from '../../firebase';
import { fbUserExists } from '../../actions';
import { store } from '../../store';

function submit(values) {
    
    return auth.doSignInWithEmailAndPassword(values.email, values.password)
        .then(({user}) => {
            console.log(store.getState());
            store.dispatch(fbUserExists(user));
        })
        .catch(error => {
            console.log(error);
            console.log("you ain't in the club fam");
        });
}

export default submit;