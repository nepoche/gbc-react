import { auth } from '../../firebase';
import { loginUserRequest, loginUserSuccess, loginUserFailure } from '../../actions';
import { store } from '../../store';

function submit(values) {
    
    store.dispatch(loginUserRequest());

    auth.doSignInWithEmailAndPassword(values.email, values.password)
        .then(({user}) => {
            console.log(store.getState());
            store.dispatch(loginUserSuccess(user));
            console.log(store.getState());
        })
        .catch(error => {
            console.log(error);
            store.dispatch(loginUserFailure());
            console.log("you ain't in the club fam");
        });
}

export default submit;