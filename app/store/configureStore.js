import { devTools } from 'redux-devtools';
import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import thunk from "redux-thunk";
import createLogger from "redux-logger";

let finalCreateStore;
let middleware = [ thunk, createLogger() ];

if (process.env.NODE_ENV === 'production') {
  finalCreateStore = applyMiddleware(...middleware)(createStore)
} else {
  finalCreateStore = compose(
    applyMiddleware(...middleware),
    devTools()
  )(createStore)
}

export default finalCreateStore(rootReducer)
