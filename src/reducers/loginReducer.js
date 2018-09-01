import { LOGIN_USER, LOGOUT_USER } from '../constants/action-types';

export default (state = "", action) => {

    switch(action.type) {
        case LOGIN_USER:
            return action.payload;
        case LOGOUT_USER:
            return "";
        default:
            return state;
    }

};