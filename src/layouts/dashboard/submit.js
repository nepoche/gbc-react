import firebase from 'firebase/app';
import { db } from '../../firebase';
import { SubmissionError } from 'redux-form';
import { history } from '../../store';

export default function submit(values) {

    if (values.address.length !== 42) {
        throw new SubmissionError({ address: 'Your Ethereum address must start with \'0x\' and total 42 characters'});
    }

    var user = firebase.auth().currentUser;

    db.requestApproval(user.uid, user.email, values.address, false);
    window.alert('Your request has been received. When we finish developing we\'ll send you some gatorcoin!');
    history.push('/');
}