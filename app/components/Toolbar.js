import React, { Component } from 'react';
import photon from "photon/sass/photon.scss";

export default class Toolbar extends Component {

  constructor (...args) {
    super(...args);
  }

  render () {
      if (this.props.type === 'header') {
        return (
          <header className="toolbar toolbar-header">
            <h1 className="title">{this.props.title}</h1>

            <div className="toolbar-actions">
                <div className="btn-group">
                  <button className="btn btn-default">
                    <span className="icon icon-home"></span>
                  </button>
                  <button className="btn btn-default">
                    <span className="icon icon-folder"></span>
                  </button>
                  <button className="btn btn-default active">
                    <span className="icon icon-cloud"></span>
                  </button>
                  <button className="btn btn-default">
                    <span className="icon icon-popup"></span>
                  </button>
                  <button className="btn btn-default">
                    <span className="icon icon-shuffle"></span>
                  </button>
                </div>

                <button className="btn btn-default">
                  <span className="icon icon-home icon-text"></span>
                  Filters
                </button>

                <button className="btn btn-default btn-dropdown pull-right">
                  <span className="icon icon-megaphone"></span>
                </button>
              </div>

          </header>
        );
      } else {
        return (
          <footer className="toolbar toolbar-footer">
            <h1 className="title">{this.props.title}</h1>
          </footer>
        );
      }
  }
}
