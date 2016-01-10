import React, { Component } from 'react';
import { connect } from "react-redux";
import { pushState } from "redux-router";
import { getConfig } from "reducers/config";
import { getConnection } from "reducers/connections";
import Window from "components/Window";
import WindowContent from "components/Window/Content";
import Toolbar from "components/Toolbar";
import TreeView from "components/TreeView";
import Panes from "components/Panes";
import Pane from "components/Panes/Item";
import Tabs from "components/Tabs";
import Tab from "Components/Tabs/Item";

class App extends Component {

  constructor (args) {
    super(args);
    this.handleConnect = this.handleConnect.bind(this);
    this.handleDsnChange = this.handleDsnChange.bind(this);
  }

  state = {
    dsn: 'postgres://josser@localhost/lounge-room'
  };

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

        <Tabs>
          <Tab label="Pickler" />
          <Tab fixed>
            <span className="icon icon-plus"></span>
          </Tab>
        </Tabs>
        <WindowContent>
          <Panes>
            <Pane role="sidebar" style={{"max-width": "200px"}}>
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
            </Pane>
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
          </Panes>
        </WindowContent>
        <Toolbar title="status bar" type="footer"></Toolbar>
      </Window>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    favorites: state.config.get('favorites'),
  }
}

export default connect(mapStateToProps)(App);
