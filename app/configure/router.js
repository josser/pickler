import React from 'react';
import { Route } from 'react-router';
import { createHashHistory as createHistory} from 'history';
import { reduxReactRouter, ReduxRouter } from "redux-router";
import App from "containers/App";
import Explorer from "containers/Explorer";
import ObjectInspector from "containers/ObjectInspector";

export const router = (
  <ReduxRouter>
    <Route path="/" component={App}>
      <Route path="db/*" components={{ sidebar: Explorer, content: ObjectInspector}} />
    </Route>
  </ReduxRouter>
);

export default reduxReactRouter({ createHistory });
