import React, { Component } from 'react';
import { connect } from "react-redux";
import autobind from 'autobind-decorator';
import TreeView from "components/TreeView";
import { getConnection } from "reducers/connections";
import { load, selectSchemaItem } from "reducers/schema";

class Explorer extends Component {

  componentWillMount() {

    this.props.dispatch(getConnection(this.props.params.splat)).then(() => {
        this.props.dispatch(load(this.props.params.splat));
    });

  }
  getKey(item) {
    return item.payload.uuid;
  }

  @autobind
  handleExplorerItemSelected(itemPayload) {
    this.props.dispatch(selectSchemaItem(itemPayload));
  }

  render() {

    return (
      <div>
        <nav className="nav-group">
          <h5 className="nav-group-title">{this.props.params.splat}</h5>
          <TreeView
            onItemClick={this.handleExplorerItemSelected}
            getKey={this.getKey}
            data={this.props.schema} />
        </nav>
      </div>
    )
  }

}

const mapStateToProps = function(state) {

  return {
    schema: state.schema.toJS()
  }
}

export default connect(mapStateToProps)(Explorer);
