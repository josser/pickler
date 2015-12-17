import DevTools from 'containers/DevTools';
import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import router, { routes } from 'configure/router'

let finalCreateStore;
let middleware = [ thunk, createLogger() ];

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
