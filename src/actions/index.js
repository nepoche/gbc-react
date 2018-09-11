import {
    SIGNUP_USER_REQUEST,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER,
} from '../constants/action-types'

const signupUserSuccess = (user) => ({
    type: SIGNUP_USER_SUCCESS,
    payload: {
        ...user
    }
})

const signupUserRequest = () => ({
    type: SIGNUP_USER_REQUEST,
})

const signupUserFailure = (error) => ({
    type: SIGNUP_USER_FAILURE,
    payload: error
})

const loginUserSuccess = (user) => ({
    type: LOGIN_USER_SUCCESS,
    payload: {
        ...user
    }
});

const loginUserRequest = () => ({
    type: LOGIN_USER_REQUEST,
})

const loginUserFailure = (error) => ({
    type: LOGIN_USER_FAILURE,
    payload: error
})

const logoutUser = () => ({
    type: LOGOUT_USER
})

export {
    signupUserRequest,
    signupUserSuccess,
    signupUserFailure,
    loginUserRequest,
    loginUserSuccess,
    loginUserFailure,
    logoutUser,
}