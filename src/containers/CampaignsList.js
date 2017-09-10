import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import { connect } from 'react-redux';

/** Class representing a list of campaigns */
class CampaignsList extends Component {
  /**
   * Create a list of campaigns.
   */
  constructor() {
    super();
    this.state = {
      campaigns: [],
    };
  }

  /**
   * When component revieve fresh props,
   * filter the campaigns array thanks to the selected brand,
   * @param {object} nextProps - The new properties from the reducer.
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedBrand && 'campaigns' in this.props.historicCraterLake) {
      const selectedBrand = nextProps.selectedBrand;
      const campaigns = this.props.historicCraterLake.campaigns.filter(campaign => {
        
        if (campaign.brand_id === selectedBrand.id) {
          const currentDate = new Date();
          const start_date = new Date(campaign.start_date * 1000);
          const end_date = new Date(campaign.end_date * 1000);

          if (start_date <= currentDate && (campaign.end_date ? end_date >= currentDate : true)) {
            campaign.brand = selectedBrand;
            return campaign;
          }
        }
        return false;
      });

      this.setState({ campaigns });
    }
  }

  /**
   * Render a campaign list item
   * @param {object} campaign - The campaign data.
   * @return {object} the ListItem component
   */
  renderListItem(campaign) {
    return (<ListItem key={campaign.id}
      primaryText={campaign.brand.name}
      secondaryText={campaign.id}
    />);
  }

  /**
   * Render a campaign list from filtered campaign
   * @return {object} the List component
   */
  render() {
    if (!this.state.campaigns.length) {
      return (<div className="info">No campaign</div>);
    }
    return (
      <List>
        {this.state.campaigns.map(this.renderListItem)}
      </List>
    );
  }
}

export default connect(
  (state) => {
    return {
      selectedBrand: state.selectedBrand,
      historicCraterLake: state.historicCraterLake,
    };
  },
)(CampaignsList);
