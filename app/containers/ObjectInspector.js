import React, { Component } from 'react';
import { connect } from "react-redux";
import Panes from 'components/Panes';
import Pane from 'components/Panes/Item';
import QueryEditor from 'containers/QueryEditor';
import QueryResults from 'containers/QueryResults';

class ObjectInspector extends Component {

  render () {
    return (
      <Panes>
        <Pane role='pane'>
          <QueryEditor />
        </Pane>
        <Pane role='pane'>
          <QueryResults />
        </Pane>
      </Panes>
    )
  }
}

export default ObjectInspector;

const mapStateToProps = function(state) {

  return {
    schema: state.schema.toJS()
  }
}

export default connect(mapStateToProps)(ObjectInspector);
