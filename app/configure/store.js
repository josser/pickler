import DevTools from 'containers/DevTools';
import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import router, { routes } from 'configure/router'
import Immutable from 'immutable';
let finalCreateStore;


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

let middleware = [ thunk, createLogger({stateTransformer}) ];

if (process.env.NODE_ENV === 'production') {
  finalCreateStore = compose(
    applyMiddleware(...middleware),
    router,
  )(createStore)
} else {
  finalCreateStore = compose(
    applyMiddleware(...middleware),
    router,
    DevTools.instrument()
  )(createStore)
}

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
};
