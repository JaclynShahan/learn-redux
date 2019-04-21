//creates store, initializes store
//combineReducers joins multiple reducer files together
//applyMiddleware applies third party middleware to this store
import {createStore, applyMiddleware, combineReducers} from 'redux';

//promiseMiddleWare will enable asynchronous payloads
//helps with axios request and the promise that is returned
import promiseMiddleware from 'redux-promise-middleware'
//import your reducers
import userReducer from './reducers/userReducer';
import otherReducer from './reducers/otherReducer';

export default createStore(
combineReducers ({
// reducers go here
userReducer, //coma seperated
otherReducer
})
, applyMiddleware(promiseMiddleware));