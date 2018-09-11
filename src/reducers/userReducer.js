import {
    SIGNUP_USER_REQUEST,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
} from "../constants/action-types";

const initialState = {
    loading: false,
    user: null,
    error: null,
}

export default (state = initialState, action) => {

    switch (action.type) {
        case SIGNUP_USER_SUCCESS:
            console.log("signup_success");
            console.log(state);
            return {
                ...state,
                user: action.payload,
                loading: false,
            }
        case SIGNUP_USER_REQUEST:
            console.log("signup_request");
            console.log(state);
            return {
                ...state,
                loading: true,   
            }
        case SIGNUP_USER_FAILURE:
            console.log("signup_failure");
            console.log(state);
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        case LOGIN_USER_SUCCESS:
            console.log("login_success");
            console.log(state);
            return {
                ...state,
                user: action.payload,
                loading: false,
            }
        case LOGIN_USER_REQUEST:
            console.log("login_request");
            console.log(state);
            return {
                ...state,
                loading: true,
            }
        case LOGIN_USER_FAILURE:
            console.log("login_failure");
            console.log(state);
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }

}