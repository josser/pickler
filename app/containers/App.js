import React, { Component } from 'react';
import { connect } from "react-redux";
import { getConfig } from "reducers/appConfig";
import Window from "components/Window";
import Toolbar from "components/Toolbar";
class App extends Component {
  componentWillMount() {
    this.props.dispatch(getConfig());
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
             <h5 className="nav-group-title">Favorites</h5>

             {this.props.favorites.map(function(item){ //@todo move to favItem component
               return (
                 <span className="nav-group-item">
                   <span className="icon icon-database"></span>
                   {item.title}
                 </span>
               )
             })}

            </nav>

           </div>
           <div className="pane">

           </div>
           </div>

        </div>
        <Toolbar title="status bar" type="footer"></Toolbar>
      </Window>
    );
  }
}

const mapStateToProps = ({ appConfig: { favorites } }) => ({ favorites });

export default connect(mapStateToProps)(App);
