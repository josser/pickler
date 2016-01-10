"use strict";

import React, { Component } from "react";

export default class Content extends Component {

  render() {
    return (
      <div className="window-content">
        {this.props.children}
      </div>
    );
  }

}
