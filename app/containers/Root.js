import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "configure/store";
import { router } from 'configure/router';

import DevTools from 'containers/DevTools';

const store = configureStore();

export default class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					{router}
					<DevTools />
				</div>
			</Provider>
		);
	}
}
