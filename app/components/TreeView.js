"use strict";

import React, { Component } from "react";
import styles from "styles/treeview.scss";
import Subtree from "components/TreeView/Subtree";

export default class TreeView extends Component {

  render() {
    return (
      <div className="treeview">
        <Subtree
        onItemClick={this.props.onItemClick}
        onItemRemove={this.props.onItemRemove}
        getKey={this.props.getKey}
        childs={this.props.data} />
      </div>
    );
  }

}
