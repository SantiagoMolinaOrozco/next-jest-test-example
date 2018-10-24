
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import posts from './posts'

export const initializeStore = () => {
  return createStore(combineReducers({ posts }), composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
