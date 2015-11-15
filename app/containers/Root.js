import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "store/configureStore";
import App from "containers/App";
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

export default class Root extends Component {
	render() {
		return (
			<div>
				<Provider store={store}>
					<App />
				</Provider>
				<DebugPanel  bottom right top>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
			</div>
		);
	}
}
