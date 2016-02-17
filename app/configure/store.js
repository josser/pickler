import DevTools from 'containers/DevTools';
import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import Immutable from 'immutable';
import { routerMiddleware } from "configure/router";

const stateTransformer = (state) => {
  let newState = {};

  if (typeof state === "object" && state !== null && Object.keys(state).length) {
    for (var i of Object.keys(state)) {
      if (Immutable.Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = stateTransformer(state[i]);
      }
    }
  } else {
    newState = state;
  }

  return newState;
}

const loggerMiddleware = createLogger({stateTransformer});
var enhancers = [ applyMiddleware(thunkMiddleware, loggerMiddleware, routerMiddleware) ];

if (process.env.NODE_ENV === 'development') {
  enhancers.push(  DevTools.instrument())
}

export default function configureStore(initialState) {

  const store = createStore(rootReducer, initialState, compose(...enhancers));
  routerMiddleware.listenForReplays(store);

  return store;
};
