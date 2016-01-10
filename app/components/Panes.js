"use strict";

import React, { Component } from "react";

export default class Panes extends Component {

  render() {
    return (
      <div className="pane-group">
        {this.props.children}
      </div>
    )
  }

}
