import React from "react";
import styled from "react-emotion";

// components
import CampaignCard from "./CampaignCard";
import Button from 'material-ui/Button';

const CampaignsList = (props) => {
  const { data, limit, updateCampaign } = props;
  return (
    <Wrapper className="campaign-list">
      {data.map((campaign, i) => {
        return i < limit && 
          <CampaignCard updateCampaign={updateCampaign} index={i} key={campaign.id} data={campaign} />
      })}
      { props.data.length > limit ?
      <Button onClick={props.increaseLimit} raised>
        Load one more
      </Button>
      :
      [<Img src='http://www.imagenspng.com.br/wp-content/uploads/2015/07/minions-02.png'/>,
      <span>No more campaigns found. Here's a minion</span>]
      }
    </Wrapper>
  );
};

const Img = styled('img')`
  height: 150px;
  width: 200px;
`

const Wrapper = styled("div")`
  text-align: center;
  position: relative;
  z-index: 1;
  top: 0;
  padding-top: 20px;
  padding-bottom: 100px;
  margin: 0 auto;
  max-width: 960px;
  /* Preserve aspet ratio */
  min-height: 100%;

`;

export default CampaignsList;
