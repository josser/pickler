import React, { Component } from 'react';
import { connect } from "react-redux";
import { getConnection } from "reducers/connections";

class Connection extends Component {

  constructor (args) {
    super(args);
    this.handleConnect = this.handleConnect.bind(this);
    this.handleDsnChange = this.handleDsnChange.bind(this);
  }

  state = {
    dsn: 'postgres://josser@localhost/lounge-room'
  };

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

    )
  }

}

export default connect()(Connection);
