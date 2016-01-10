"use strict";

import React, { Component } from "react";

export default class Tabs extends Component {

  render() {
    return (
      <div className="tab-group">
        {this.props.children}
      </div>
    );
  }

}
