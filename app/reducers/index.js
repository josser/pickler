import { combineReducers } from 'redux';
import config from 'reducers/config';
import connections from 'reducers/connections';
import schema from 'reducers/schema';

import { routerReducer as routing } from "react-router-redux";

const rootReducer = combineReducers({
	routing,
	config,
	connections,
	schema
});

export default rootReducer;
