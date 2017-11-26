import React from "react";
import styled from "react-emotion";

// components
import FlexBox from "../../components/FlexBox";

// colors
import * as colors from "../../constants/Colors";

const CampaignPipeline = ({ values }) => (
  <Wrapper>
    {values.map((attribute, i) => [
      <ItemWrapper key={attribute.id}>
        <Item key={1} main green={attribute.name==='VIEWS'}>{attribute.value}</Item>
        <Item key={2}>{attribute.name}</Item>
      </ItemWrapper>,
      i < values.length - 1 && <Arrow />
    ])}
  </Wrapper>
);

const ItemWrapper = styled("div")`
  margin: 0 10px;
`;

const Item = styled("div")`
  font-weight: ${props => (props.main ? 400 : 400)};
  letter-spacing: ${props => props.main && '1.2px'};
  font-size: ${props => (props.main ? "22px" : "14px")};
  color: ${props => (props.main ? colors.third : colors.first)};
  color: ${props => (props.green && 'green')};
  margin-bottom: 8px;
`;

// default component
const Arrow = styled("div")`
  width: 0;
  height: 0;
  top: 12px;
  position: relative;
  margin: 0 10px;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 10px solid ${colors.textDark};
`;

const Wrapper = styled(FlexBox)`
  margin-bottom: 10px;
`;

export default CampaignPipeline;
