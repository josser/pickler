import React, { Component } from 'react';
import { connect } from "react-redux";

class QueryResults extends Component {

  render() {
    const columns = this.props.results.length > 0 ? Object.keys(this.props.results[0]) : ['']
    const results = this.props.results;

    return (
      <table className="table-striped">
      <thead>
        <tr>
          {columns.map(function(column){
            return (
              <th key={column}>
              {column}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {results.map(row => {
          return (
            <tr key={row.id}>
              {columns.map(colName => {
                return (
                  <td key={row.id+colName}>{row[colName].toString()}</td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
      </table>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    results: state.connections.lastResults
  }
}

export default connect(mapStateToProps)(QueryResults);
