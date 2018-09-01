import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { drizzleReducers } from 'drizzle'
import { reducer as formReducer } from 'redux-form'

import LoginReducer from './loginReducer'

const reducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  login: LoginReducer,
  ...drizzleReducers
})

export default reducer
