import { auth } from '../../firebase';
import { userLoggedIn } from '../../actions';
import { store } from '../../store';

function submit(values) {
    
    return auth.doSignInWithEmailAndPassword(values.email, values.password)
        .then(() => {
            console.log(store.getState());
            store.dispatch(userLoggedIn(values.email));
        })
        .catch(error => {
            console.log("you ain't in the club fam");
        });

}

export default submit;