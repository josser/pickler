import React, {Component} from 'react';
import {connect} from "react-redux";
import autobind from 'autobind-decorator';
import TreeView from "components/TreeView";
import { getConnection } from "reducers/connections";
import { load } from "reducers/schema";

class Explorer extends Component {

  componentWillMount() {

    this.props.dispatch(getConnection(this.props.params.splat)).then(() => {
        this.props.dispatch(load(this.props.params.splat));
    });

  }

  render() {

    return (
      <div>
        <nav className="nav-group">
          <h5 className="nav-group-title">{this.props.params.splat}</h5>

        </nav>
      </div>
    )
  }

}

const mapStateToProps = function(state) {
  return {
    schema: state.schema
  }
}

export default connect(mapStateToProps)(Explorer);
