import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { drizzleReducers } from 'drizzle'
import { reducer as formReducer } from 'redux-form'

import userReducer from './userReducer';

const reducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  user: userReducer,
  ...drizzleReducers
})

export default reducer
