import React, { Component } from 'react';
import { connect } from "react-redux";
import { routeActions } from "react-router-redux";
import { addToFavorites, save, touchFavorites } from "reducers/config";
import autobind from "autobind-decorator";

class Connection extends Component {

  state = {
    favorite: {
      payload: {
        dsn: ''
      }
    }
  };

  @autobind
  handleConnect(e) {
    e.preventDefault();
    this.props.dispatch(routeActions.push('/db/' + this.getSelectedFavorite().payload.dsn.trim()))
  }

  @autobind
  handleAddToFavorites() {
    const favorite = this.state.favorite;
    this.props.dispatch(addToFavorites(favorite.payload.dsn.trim()));
    this.props.dispatch(save());
  }

  @autobind
  handleDsnChange(e) {
    this.props.dispatch(touchFavorites());
    this.setState({favorite: {payload: {dsn: e.target.value}}});
  }

  getSelectedFavorite() {
    return this.props.favorites.filter(item => item.selected)[0] || this.state.favorite;
  }

  render() {

    return (
      <form onSubmit={this.handleConnect}>
        <div className="form-group">
          <label>Database DSN</label>
          <input type="text" className="form-control"
            placeholder="pgsql://user:password@hostname:port/database"
            value={this.getSelectedFavorite().payload.dsn || this.state.dsn}
            onChange={this.handleDsnChange} />
        </div>
        <div className="form-actions">
          <button type="button" className="btn btn-form btn-primary" onClick={this.handleAddToFavorites}>Add to favorites</button>
          <button type="submit" className="btn btn-form btn-default">Connect</button>
        </div>
      </form>

    )
  }

}

const mapStateToProps = function (state) {
  return {
    favorites: state.config.get('favorites').toJS(),
    currentConnection: state.connections.current
  }
}

export default connect(mapStateToProps)(Connection);
