"use strict";

import React, { Component } from "react";
import classnames from "classnames";


export default class Item extends Component {

  defaultProps: {
    role: ''
  };

  render() {

    const className = classnames(this.props.role, "pane-sm");

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }

}
