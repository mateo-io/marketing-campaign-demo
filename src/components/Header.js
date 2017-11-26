import React from 'react';
import styled from 'react-emotion'

// components 
import Title from './Title';

const Header = () => (
    <Wrapper>
        <Title main>beste Marketingseite</Title>
        <Meme>Best marketing site in the history of marketing sites, maybe ever.</Meme>
    </Wrapper>
)

const Meme = styled('h6')`
`

const Wrapper = styled('div')`
    background: white;
`

export default Header;