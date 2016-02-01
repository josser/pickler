"use strict";

import React, { Component } from "react";
import classnames from 'classnames';

class Item extends Component {

  constructor(args) {
    super(args);
    this.onItemClick = this.props.onItemClick.bind(this, this.props.item.payload);
  }

  render () {
    const item = this.props.item;
    const removeButton = this.props.onItemRemove ? <a onClick={this.props.onItemRemove.bind(this, this.props.item.payload)} className="remove"><span className="icon icon-cancel"></span></a> : '';

      if (item.childs) {
        return (
          <li>
            <input type="checkbox" id={this.props.reactKey} disabled={item.disabled} defaultChecked={item.opened} />
            <label htmlFor={this.key}>{item.label}</label>
            {this.props.children}
          </li>
        )
      } else {        
        return (
          <li className={classnames({'selected': item.selected})}>
            <a onClick={this.onItemClick} className="item">{item.label}</a>
            {removeButton}
          </li>
        )
      }
  }

}

export default Item;
