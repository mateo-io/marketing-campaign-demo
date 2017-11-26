import React from "react";
import styled from "react-emotion";

// colors
import * as colors from "../constants/Colors";

const SubTitle = styled('h2')`
    color: ${props => props.main ? colors.first : colors.second};
    font-size: ${props => props.main ? '30px' : '24px'};
    font-style: italic;
`

export default SubTitle;