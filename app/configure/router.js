import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import App from "containers/App";
import Explorer from "containers/Explorer";
import ObjectInspector from "containers/ObjectInspector";
import { syncHistoryWithStore } from 'react-router-redux';

export default function configureRouter(store) {

  const history = syncHistoryWithStore(hashHistory, store)

  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="db/*" components={{ sidebar: Explorer, content: ObjectInspector}} />
      </Route>
    </Router>
  );

}
