import React from "react";
import styled from "react-emotion";

//components
import AttributeCard from "./AttributeCard";
import Paper from "material-ui/Paper";
import SubTitle from "../../components/SubTitle";
import FlexBox from "../../components/FlexBox";
import CampaignPipeline from "./CampaignPipeline";

// colors
import * as colors from "../../constants/Colors";

// @SPEC
// Reach -> Capture Rate -> Views -> Interaction Rate -> Interactions
const CampaignCard = props => {
  const {
    index,
    updateCampaign,
    data: {
      id,
      start_date,
      days,
      reach,
      goal,
      views,
      title,
      capture_rate,
      interaction_rate,
      interactions
    }
  } = props;
  // Get values for the CampaignPipeline component. Used for custom names and methods
  const pipelineValues = [
    {
      id: id,
      name: "REACH",
      value: reach ? reach : <br />
    },
    {
      id: id,
      name: "CAPTURE RATE",
      value: capture_rate ? capture_rate.toFixed(2) + "%" : <br />
    },
    {
      id: id,
      name: "VIEWS",
      value: views ? views : <br />
    },
    {
      id: id,
      name: "INTERACTION RATE",
      value: interaction_rate ? interaction_rate.toFixed(2) + "%" : <br />
    },
    {
      id: id,
      name: "INTERACTIONS",
      value: interactions ? interactions : <br />
    }
  ];

  const handleUpdate = (field, value) => {
    console.log("CampaignCard handleupdate called", field, value);
    return updateCampaign(id, { [field]: value });
  };

  return (
    <Wrapper>
      <Index>{index + 1}</Index>
      <SubTitle main>{title}</SubTitle>

      <FlexBox>
        <AttributeCard
          key={1}
          name="goal"
          updateCampaign={handleUpdate}
          value={goal}
        />
        <AttributeCard key={2} name="days" value={days} />
        <AttributeCard key={3} name="started at" value={start_date} />
      </FlexBox>

      <CampaignPipeline values={pipelineValues} />
    </Wrapper>
  );
};

const Index = styled("h6")`
  float: left;
  color: ${colors.first}
  font-size: 26px;
  margin:10px;

`;

// main card wrapper
const Wrapper = styled(Paper)`
  text-align: center;
  min-height: 150px;
  padding: 10px;
  margin: 20px 0;
`;

export default CampaignCard;
