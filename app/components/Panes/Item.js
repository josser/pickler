"use strict";

import React, { Component } from "react";

export default class Item extends Component {

  defaultProps: {
    role: ''
  };

  render() {
    return (
      <div className="pane {this.props.role}">
        {this.props.children}
      </div>
    );
  }

}
