"use strict";

import React, { Component } from "react";

class Item extends Component {

  render () {
    const item = this.props.item;

      if (item.childs) {
        return (
          <li>
            <input type="checkbox" id={this.props.path} disabled={item.disabled} defaultChecked={item.opened}/>
            <label htmlFor={this.props.path}>{item.label}</label>
            {this.props.children}
          </li>
        )
      } else {
        return (
          <li><a>{item.label}</a></li>
        )
      }
  }

}

export default Item;
