import React, { Component } from 'react';
import { connect } from "react-redux";
import TreeView from "components/TreeView";
import { pushState } from "redux-router";
import { getConfig } from "reducers/config";

class Favorites extends Component {

  componentWillMount() {
    this.props.dispatch(getConfig());
  }

  render () {
    return (
      <div>
        <nav className="nav-group">
          <h5 className="nav-group-title"></h5>
          <span className="nav-group-item">
            <span className="icon icon-flash"></span>
            Quick Connection
          </span>
        </nav>
        <nav className="nav-group">
          <h5 className="nav-group-title">Favorites</h5>
          <TreeView />
        </nav>
      </div>
    )
  }

}

const mapStateToProps = function (state) {
  return {
    favorites: state.config.get('favorites'),
  }
}

export default connect(mapStateToProps)(Favorites);
