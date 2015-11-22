import React, { Component } from 'react';
import { connect } from "react-redux";

class Explorer extends Component {
  render() {
    return (
      <div>This is explorer</div>
    );
  }

}

export default connect()(Explorer);
