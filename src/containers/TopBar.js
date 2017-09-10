import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchHistoricCraterLake, selectBrand } from '../actions';

/** Class representing an AppBar with AutoComplete */
class TopBar extends Component {
  /**
   * Create a TopBar.
   */
  constructor() {
    super();
    this.state = {
      dataSource: [],
      dataSourceConfig: {
        text: 'name',
        value: 'id',
      },
    };

    this.handleAutoComplete = this.handleAutoComplete.bind(this);
  }

  /**
   * When component will mount, fetch the data from the API.
   */
  componentWillMount() {
    this.props.fetchHistoricCraterLake();
  }

  /**
   * When component revieve fresh props,
   * set dataSource with the brand list if exists,
   */
  componentWillReceiveProps(nextProps) {
    if ('brands' in nextProps.historicCraterLake) {
      this.setState({ dataSource: nextProps.historicCraterLake.brands });
    }
  }
  
  /**
   * When user type text in the field or select a brand in the autocomplete list, 
   * check if the name is a valid brand and set the selected brand.
   */
  handleAutoComplete(text, id) {
    const dataSource = this.state.dataSource;

    for (let i=0; i<dataSource.length; i++) {
      if (dataSource[i].name === text) {
        this.props.selectBrand(dataSource[i]);
        break;
      }
    }
  }

  /**
   * Render an AppBar component with AutoComplete
   * @return {object} the AppBar component
   */
  render() {
    return (
      <AppBar 
        title="historic crater lake"
        showMenuIconButton={false}
      >
        <AutoComplete
          hintText="Type a brand..."
          dataSource={this.state.dataSource}
          dataSourceConfig={this.state.dataSourceConfig}
          onUpdateInput={this.handleAutoComplete}
          filter={AutoComplete.caseInsensitiveFilter}
        />
      </AppBar>
    );
  }
}

export default connect(
  ({ historicCraterLake }) => ({ historicCraterLake }),
  (dispatch) => bindActionCreators({
    fetchHistoricCraterLake,
    selectBrand,
  }, dispatch),
)(TopBar);
