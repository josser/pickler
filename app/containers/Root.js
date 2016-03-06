import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "configure/store";
import configureRouter from 'configure/router';

import DevTools from 'containers/DevTools';

const store = configureStore();
const router = configureRouter(store);

export default class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				{router}
			</Provider>
		);
	}
}
