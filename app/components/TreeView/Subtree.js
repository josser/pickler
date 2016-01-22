"use strict";

import React, { Component } from "react";
import Item from "./Item";


class Subtree extends Component {

  getSubtree(childs, nextPath) {

    if (childs) {
      return <Subtree childs={childs} path={nextPath} />
    } else {
      return '';
    }
  }

  render () {
    var i = 0;

    return (
      <ul>

        {this.props.childs.map(item => {
          var nextPath = this.props.path + '.' + i;
          i++;
          return (
            <Item item={item} path={nextPath} key={nextPath}>
              {this.getSubtree(item.childs, nextPath)}
            </Item>
          )
        })}
      </ul>
    )
  }

}


export default Subtree;
