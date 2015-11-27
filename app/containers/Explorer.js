import React, { Component } from 'react';
import { connect } from "react-redux";
import Window from "components/Window";
import Toolbar from "components/Toolbar";
import QueryResults from "containers/QueryResults";
import { query } from "reducers/connections";
import AceEditor  from 'react-ace';
import 'brace';
import 'brace/mode/sql';
import 'brace/theme/textmate';

class Explorer extends Component {
  constructor(args) {
    super(args);

    this.updateQuery = this.updateQuery.bind(this);
  }

  state = {
    query: 'select * from "Users"'
  }

  updateQuery(value) {
    this.setState({query: value});
  }

  shouldComponentUpdate(nextProps) {
     return nextProps.newQueryRequested !== this.props.newQueryRequested;     
  }

  componentWillUpdate (nextProps) {

    if (nextProps.newQueryRequested) {
      this.props.dispatch(query(this.state.query));
    }
  }

  render() {

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

           </nav>

           </div>
           <div className="pane">
             <AceEditor
               mode="sql"
               theme="textmate"
               name="sql-editor"
               width="100%"
               highlightActiveLine={true}
               onChange={this.updateQuery}
               value={this.state.query}
               editorProps={{$blockScrolling: true}}
             />
            </div>
            <div className="pane">
              <QueryResults />
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
    newQueryRequested: state.connections.newQueryRequested
  }
}

export default connect(mapStateToProps)(Explorer);
