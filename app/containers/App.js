import React, { Component } from 'react';
import { connect } from "react-redux";

import Window from "components/Window";
import WindowContent from "components/Window/Content";
import Toolbar from "components/Toolbar";
import Panes from "components/Panes";
import Pane from "components/Panes/Item";
import Tabs from "components/Tabs";
import Tab from "components/Tabs/Item";
import Favorites from "containers/Favorites";
import Connection from "containers/Connection";

class App extends Component {

  render() {
    const { sidebar, content } = this.props;

    return (

      <Window>
        <Toolbar title="ReDB" type="header"></Toolbar>

        <Tabs>
          <Tab label="Pickler" />
          <Tab fixed>
            <span className="icon icon-plus"></span>
          </Tab>
        </Tabs>
        <WindowContent>
          <Panes>
            <Pane role="sidebar" style={{ "maxWidth":"200px" }}>
              {sidebar || <Favorites />}
            </Pane>
            <div className="pane padded-more">
              {content || <Connection />}
            </div>
          </Panes>
        </WindowContent>
        <Toolbar title="status bar" type="footer"></Toolbar>
      </Window>
    );
  }
}


export default App;
