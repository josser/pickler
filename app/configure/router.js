import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import App from "containers/App";
import Explorer from "containers/Explorer";
import ObjectInspector from "containers/ObjectInspector";
import { syncHistory } from 'react-router-redux';

export const routerMiddleware = syncHistory(hashHistory);

export const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="db/*" components={{ sidebar: Explorer, content: ObjectInspector}} />
    </Route>
  </Router>
);
