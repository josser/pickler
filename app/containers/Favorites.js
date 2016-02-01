import React, { Component } from 'react';
import { connect } from "react-redux";
import TreeView from "components/TreeView";
import { pushState } from "redux-router";
import { getConfig, selectFavorite, removeFavorite, save } from "reducers/config";
import autobind from 'autobind-decorator';

class Favorites extends Component {

  componentWillMount() {
    this.props.dispatch(getConfig());
  }

  @autobind
  handleFavoritesItemSelected(itemPayload) {
    this.props.dispatch(selectFavorite(itemPayload));
  }

  @autobind
  handleFavoritesItemRemove(itemPayload) {
    this.props.dispatch(removeFavorite(itemPayload));
    this.props.dispatch(save());
  }

  getKey(item) {
    return item.payload.uuid;
  }

  render () {

    return (
      <div>        
        <nav className="nav-group">
          <h5 className="nav-group-title">Favorites</h5>
          <TreeView
            onItemClick={this.handleFavoritesItemSelected}
            onItemRemove={this.handleFavoritesItemRemove}
            getKey={this.getKey}
            data={this.props.favorites} />
        </nav>
      </div>
    )
  }

}

const mapStateToProps = function (state) {
  return {
    favorites: state.config.get('favorites').toJS()
  }
}

export default connect(mapStateToProps)(Favorites);
