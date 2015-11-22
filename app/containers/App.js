import React, { Component } from 'react';
import { connect } from "react-redux";
import { pushState } from "redux-router";
import { getConfig } from "reducers/appConfig";
import { getConnection } from "reducers/connections";
import Window from "components/Window";
import Toolbar from "components/Toolbar";
class App extends Component {
  constructor (...args) {
    super(...args);
    this.handleConnect = this.handleConnect.bind(this);
    this.handleDsnChange = this.handleDsnChange.bind(this);
  }

  state = {
    dsn: 'postgres://josser@localhost/lounge-room'
  }

  componentWillMount() {
    this.props.dispatch(getConfig());
  }

  handleConnect(e) {
    e.preventDefault();

    this.props.dispatch(getConnection(this.state.dsn.trim()));
  }

  handleDsnChange(e) {
   this.setState({dsn: e.target.value});
  }

  render() {
    var dsn = this.state.dsn;

    return (

      <Window>
        <Toolbar title="ReDB" type="header"></Toolbar>

        <div className="tab-group">
          <div className="tab-item active">
            <span className="icon icon-cancel icon-close-tab"></span>
            ReDB
          </div>
          <div className="tab-item tab-item-fixed">
            <span className="icon icon-plus"></span>
          </div>
        </div>
        <div className="window-content">
         <div className="pane-group">
           <div className="pane-sm sidebar">
          <nav className="nav-group">
           <h5 className="nav-group-title"></h5>
          <span className="nav-group-item">
            <span className="icon icon-flash"></span>
            Quick Connection
          </span>
          </nav>

           <nav className="nav-group">
             <h5 className="nav-group-title">Favorites</h5>

             {this.props.favorites.map(function(item){ //@todo move to favItem component
               return (
                 <span key="item.title" className="nav-group-item">
                   <span className="icon icon-database"></span>
                   {item.title}
                 </span>
               )
             })}

            </nav>

           </div>
           <div className="pane padded-more">
           <form onSubmit={this.handleConnect}>
            <div className="form-group">
             <label>Database DSN</label>
             <input type="text" className="form-control" placeholder="pgsql://user:password@hostname:port/database" defaultValue={dsn} onChange={this.handleDsnChange} />
            </div>
            <div className="form-actions">
             <button type="button" className="btn btn-form btn-primary">Add to favorites</button>
             <button type="submit" className="btn btn-form btn-default">Connect</button>
            </div>
            </form>
            </div>

          </div>

        </div>
        <Toolbar title="status bar" type="footer"></Toolbar>
      </Window>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    favorites: state.appConfig.favorites,
  }
}

export default connect(mapStateToProps)(App);
