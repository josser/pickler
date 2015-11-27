import React from "react";
import { render } from "react-dom";
import Root from 'containers/Root'
require("babel-polyfill");

render(
  <Root />,
  document.getElementById('app-container')
);
