import { combineReducers } from 'redux';
import config from 'reducers/config';
import connections from 'reducers/connections';
import { routerReducer as routing } from "react-router-redux";

const rootReducer = combineReducers({
	routing,
	config,
	connections
});

export default rootReducer;
