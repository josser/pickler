import React, { Component } from 'react';
import { connect } from "react-redux";
import getConfig from "reducers/appConfig";
import Window from "components/Window";
import Toolbar from "components/Toolbar";
class App extends Component {
  render() {

    this.props.dispatch(getConfig());

    return (
      <Window>
        <Toolbar title="ReDB" type="header"></Toolbar>
        <div className="window-content">
         <div className="pane-group">
           <div className="pane-sm sidebar">
           <nav className="nav-group">
             <h5 className="nav-group-title">Favorites</h5>
             <a className="nav-group-item active">
               <span className="icon icon-home"></span>
               connors
             </a>
             <span className="nav-group-item">
               <span className="icon icon-download"></span>
               Downloads
             </span>
             <span className="nav-group-item">
               <span className="icon icon-folder"></span>
               Documents
             </span>
             <span className="nav-group-item">
               <span className="icon icon-signal"></span>
               AirPlay
             </span>
             <span className="nav-group-item">
               <span className="icon icon-print"></span>
               Applications
             </span>
             <span className="nav-group-item">
               <span className="icon icon-cloud"></span>
               Desktop
             </span>
            </nav>

           </div>
           <div className="pane">

           <div className="tab-group">
             <div className="tab-item">
               <span className="icon icon-cancel icon-close-tab"></span>
               Tab
             </div>
             <div className="tab-item active">
               <span className="icon icon-cancel icon-close-tab"></span>
               Tab active
             </div>
             <div className="tab-item">
               <span className="icon icon-cancel icon-close-tab"></span>
               Tab
             </div>
             <div className="tab-item tab-item-fixed">
               <span className="icon icon-plus"></span>
             </div>
           </div>
           <div>
           <table className="table-striped">
             <thead>
               <tr>
                 <th>Name</th>
                 <th>Kind</th>
                 <th>File Size</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td>photon.css</td>
                 <td>CSS</td>
                 <td>222222K</td>
               </tr>
               <tr>
                 <td>photon.css</td>
                 <td>CSS</td>
                 <td>28K</td>
               </tr>
               <tr>
                 <td>photon.css</td>
                 <td>CSS</td>
                 <td>28K</td>
               </tr>
               <tr>
                 <td>photon.css</td>
                 <td>CSS</td>
                 <td>28K</td>
               </tr>
             </tbody>
            </table>
            </div>
           </div>
         </div>
        </div>
        <Toolbar title="status bar" type="footer"></Toolbar>
      </Window>
    );
  }
}

export default connect()(App);;
