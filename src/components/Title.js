import React from "react";
import styled from "react-emotion";

// colors
import * as colors from "../constants/Colors";

const Title = styled('h1')`
    color: ${props => props.main ? colors.first : colors.second};
    font-size: ${props => props.main ? '40px' : '26px'};
    font-style: italic;
`

export default Title;