import React, { Component } from 'react';
import photon from "photon/sass/photon.scss";

export default class Window extends Component {

  render () {
    return (
      <div className="window">
        {this.props.children}
      </div>
    )
  }
}
