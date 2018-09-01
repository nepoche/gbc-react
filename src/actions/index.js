import { LOGIN_USER, LOGOUT_USER } from '../constants/action-types'

const userLoggedIn = (email) => ({
    type: LOGIN_USER,
    payload: email
});

const userLoggedOut = () => ({
    type: LOGOUT_USER,
    payload: ""
})

export { userLoggedIn, userLoggedOut }