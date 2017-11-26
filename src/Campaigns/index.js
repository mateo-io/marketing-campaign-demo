import React from "react";
import styled from "react-emotion";

// data
import data from "./campaigns.json";

// components
import CampaignsList from "./CampaignsList";
import * as colors from "../constants/Colors";

// campaigns container
export default class Campaigns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campaignLimit: 8,
      campaignList: data
    };
  }

  increaseLimit = () => {
    return this.setState(prevState => {
      return { campaignLimit: prevState.campaignLimit + 1 };
    });
  };

  updateCampaign(id, payload) {
    return this.setState(prevState => {
      return {
        campaignList: prevState.campaignList.map(campaign => {
          if (campaign.id === id) {
            const updatedCampaign = Object.assign({}, campaign, payload);
            return  updatedCampaign;
          } else {
            return campaign;
          }
        })
      };
    });
  }

  render() {
    return (
      <Wrapper className="campaing-list-wrapper">
        <CampaignsList
          limit={this.state.campaignLimit}
          increaseLimit={this.increaseLimit.bind(this)}
          updateCampaign={this.updateCampaign.bind(this)}
          data={this.state.campaignList}
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled("div")`
  background: linear-gradient(${colors.first}, ${colors.second});
`;
