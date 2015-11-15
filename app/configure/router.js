import React from 'react';
import { Route } from 'react-router';
import createHistory from 'history/lib/createHashHistory';
import { reduxReactRouter } from "redux-router";
import App from "containers/App";
import Explorer from "containers/Explorer";

export const routes = (
  <Route path="/" component={App}>
    <Route path="/:favorites-item-id" component={Explorer}></Route>
  </Route>
);

export default reduxReactRouter({ createHistory, routes });
