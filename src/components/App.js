import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopBar from '../containers/TopBar';
import CampaignsList from '../containers/CampaignsList';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <TopBar></TopBar>
          <CampaignsList></CampaignsList>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
