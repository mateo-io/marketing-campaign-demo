import React from "react";
import styled from "react-emotion";

// components
import GoalSelect from "./GoalSelect";

// colors
import * as colors from "../../constants/Colors";

const AttributeCard = props => (
  <Wrapper>
    {props.value || props.name !== "goal" ? (
      [
        <Value>{props.value ? props.value : <br />}</Value>,
        <Name>{props.name}</Name>
      ]
    ) : (
      <TextEdit
        attr={props}
        name={props.name}
        onSubmit={props.updateCampaign}
      />
    )}
  </Wrapper>
);

class TextEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }
  render() {
    return (
      <div>
        {this.props.name ? (
          // <button onClick={() => this.props.onClick()}>click</button>
          <GoalSelect
            onSubmit={(field, name) => this.props.onSubmit(field, name)}
          />
        ) : (
          <button onClick={() => this.setState({ isEditing: true })}>
            Edit
          </button>
        )}
      </div>
    );
  }
}

const Value = styled("h3")`
  color: ${colors.first}
  font-size: 22px;
  margin: 5px;
  text-transform: uppercase;
  font-weight: 400;
`;

const Name = styled("h4")`
  color: ${colors.textDark}
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0;
`;

const Wrapper = styled("div")`
  text-align: center;
  height: 90px;
  width: 200px;
`;

export default AttributeCard;
