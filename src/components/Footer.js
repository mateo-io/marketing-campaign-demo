import React from 'react';
import styled from 'react-emotion'

const Footer = () => (
    <Wrapper>
        mit Logik gemacht
    </Wrapper>
)

const Wrapper = styled('div')`
    text-align: center;
    background: white;
    padding-top: 10px;
    color: grey;
    font-weight: 900; 
    position: absolute;
    width: 100%;
    height: 30px;
    bottom: -30px;
`

export default Footer;