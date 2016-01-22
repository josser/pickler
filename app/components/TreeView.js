"use strict";

import React, { Component } from "react";
import styles from "styles/treeview.scss";
import Subtree from "components/TreeView/Subtree";

export default class TreeView extends Component {

  static defaultProps = {
    data: [
      {label: 'This Folder is Closed By Default', childs: [
        {label: 'Ooops! A Nested Folder', childs: [
          {label: 'Look Ma - No Hands!', opened: true, childs: [
            {label: 'First nested Item'},
            {label: 'Second nested Item'},
            {label: 'Third nested Item'},
            {label: 'Fourth nested Item'},
          ]},
          {label: 'Item 1'},
          {label: 'Item 2'},
          {label: 'Item 3'},
        ]},
        {label: 'Yet Another One', childs: [
          {label: 'item'}, {label: 'item'}, {label: 'item'}, {label: 'item'}, {label: 'item'}, {label: 'item'}
        ]},
        {label: 'Disabled Nested Items', disabled: true, childs: [
          {label: 'item'}, {label: 'item'}, {label: 'item'}, {label: 'item'}, {label: 'item'}, {label: 'item'}
        ]}
      ]},
      {label: 'This One is Open by Default...', opened: true, childs: [
        {label: 'And Contains More Nested Items...', childs: [
          {label: 'Look Ma - No Hands'},
          {label: 'Another Item'},
          {label: 'And yet another'}
        ]},
        {label: 'Lorem'}, {label: 'Ipsum'}, {label: 'Dolor'}, {label: 'Sit Amet'}
      ]},
      {label: 'Can You Believe...'}
    ]
  };


  render() {
    return (
      <div className="treeview">
        <Subtree childs={this.props.data} path="favorites" />
      </div>
    );
  }

}
