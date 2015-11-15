import { combineReducers } from 'redux';
import appConfig from 'reducers/appConfig';
import { routerStateReducer as router } from "redux-router";

const rootReducer = combineReducers({
	router,
	appConfig
});

export default rootReducer;
