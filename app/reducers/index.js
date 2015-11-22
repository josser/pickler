import { combineReducers } from 'redux';
import appConfig from 'reducers/appConfig';
import connections from 'reducers/connections';
import { routerStateReducer as router } from "redux-router";

const rootReducer = combineReducers({
	router,
	appConfig,
	connections
});

export default rootReducer;
