import {createStore, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'; // Enforces immutability.
import thunk from 'redux-thunk';
import logger from 'redux-logger'; // We will use this for logging how redux is handling requests on the console.
 
import {rootReducer} from '../rootReducer';

export const configureStore = (initialState) =>{
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant(), logger)
  );
}