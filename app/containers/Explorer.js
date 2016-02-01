import React, {Component} from 'react';
import {connect} from "react-redux";
import QueryResults from "containers/QueryResults";
import {query} from "reducers/connections";
import AceEditor from 'react-ace';
import 'brace';
import 'brace/mode/sql';
import 'brace/theme/textmate';
import autobind from 'autobind-decorator';

class Explorer extends Component {


  state = {
    query: 'select * from "Users"'
  };

  @autobind
  updateQuery(value) {
    this.setState({query: value});
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.newQueryRequested !== this.props.newQueryRequested;
  }

  componentWillUpdate(nextProps) {

    if (nextProps.newQueryRequested) {
      this.props.dispatch(query(this.state.query));
    }
  }

  render() {

    return (
      <div>
        <div className="pane">
          <AceEditor mode="sql" theme="textmate" name="sql-editor" width="100%" highlightActiveLine={true} onChange={this.updateQuery} value={this.state.query} editorProps={{
            $blockScrolling: true
          }}/>
        </div>
        <div className="pane">
          <QueryResults/>
        </div>
      </div>

    );
  }

}

const mapStateToProps = function(state) {
  return {newQueryRequested: state.connections.newQueryRequested}
}

export default connect(mapStateToProps)(Explorer);
