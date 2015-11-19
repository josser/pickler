import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "configure/store";
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { ReduxRouter } from 'redux-router';
import { routes } from 'configure/router';

export default class Root extends Component {
	render() {
		return (
			<div>
				<Provider store={store}>
					<ReduxRouter>
						{routes}
					</ReduxRouter>
				</Provider>		
			</div>
		);
	}
}
