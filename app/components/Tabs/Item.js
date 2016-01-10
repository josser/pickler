"use strict";

import React, { Component } from "react";
import classnames from "classnames";

export default class Item extends Component {

  defaultProps = {
    label: '',
    active: false,
    fixed: false
  };

  render() {

    var tabClass = classnames({
      'tab-item': true,
      'active': this.props.active,
      'tab-item-fixed': this.props.fixed
    });

    return (
      <div className={tabClass}>
        <span className="icon icon-cancel icon-close-tab"></span>
        {this.props.label}
        {this.props.children}
      </div>
    );
  }

}
