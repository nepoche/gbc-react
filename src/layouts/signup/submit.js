import { auth } from '../../firebase';

function submit(values) {

    return auth.doCreateUserWithEmailAndPassword(values.email, values.password)
            .then(() => {
                console.log("ya made it");
            })
            .catch(error => {
                console.log("ya cant even make it");
            });

}

export default submit;