import { combineReducers } from 'redux';
import config from 'reducers/config';
import connections from 'reducers/connections';
import { routerStateReducer as router } from "redux-router";

const rootReducer = combineReducers({
	router,
	config,
	connections
});

export default rootReducer;
