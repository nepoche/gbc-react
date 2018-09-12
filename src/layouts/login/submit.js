import { auth } from '../../firebase';
import { loginUserRequest, loginUserSuccess, loginUserFailure } from '../../actions';
import store, { history } from '../../store';

function submit(values) {
    
    store.dispatch(loginUserRequest());

    auth.doSignInWithEmailAndPassword(values.email, values.password)
        .then(({user}) => {
            console.log(store.getState());
            if (user.emailVerified) {
                store.dispatch(loginUserSuccess(user));
                history.push('/dashboard');
            } else {
                store.dispatch(loginUserFailure());
                console.log("kinda logged in but also not really");
                window.alert("You need to verify your email");
            }
            console.log(store.getState());
        })
        .catch(error => {
            console.log(error);
            store.dispatch(loginUserFailure());
            console.log("you ain't in the club fam");
        });
}

export default submit;