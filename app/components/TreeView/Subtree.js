"use strict";

import React, { Component } from "react";
import Item from "./Item";


class Subtree extends Component {

  getSubtree(childs) {

    if (childs) {
      return <Subtree
        onItemRemove={this.props.onItemRemove}
        onItemClick={this.props.onItemClick}
        getKey={this.props.getKey}
      childs={childs} />
    } else {
      return '';
    }
  }

  render () {

    return (
      <ul>
        {this.props.childs.map(item => {
          return (
            <Item
              item={item} key={this.props.getKey(item)} reactKey={this.props.getKey(item)}
              onItemClick={this.props.onItemClick} onItemRemove={this.props.onItemRemove}>
              {this.getSubtree(item.childs)}
            </Item>
          )
        })}
      </ul>
    )
  }

}


export default Subtree;
