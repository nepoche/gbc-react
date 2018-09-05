import { LOGIN_USER, LOGOUT_USER, FB_USER_EXISTS } from '../constants/action-types'

const userLoggedIn = (email) => ({
    type: LOGIN_USER,
    payload: email
});

const userLoggedOut = () => ({
    type: LOGOUT_USER,
    payload: ""
})

const fbUserExists = (user) => ({
    type: FB_USER_EXISTS,
    payload: user
});

export { userLoggedIn, userLoggedOut, fbUserExists }