import React from 'react';
import { Route } from 'react-router';
import { createHashHistory as createHistory} from 'history';
import { reduxReactRouter } from "redux-router";
import App from "containers/App";
import Explorer from "containers/Explorer";

export const routes = (
  <Route path="/" component={App}>
    <Route path="db/*" component={Explorer} />
  </Route>
);

export default reduxReactRouter({ createHistory });
