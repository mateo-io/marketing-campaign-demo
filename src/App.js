import React, { Component } from 'react';

// libs
import styled from 'react-emotion';
import 'typeface-roboto';


// components
import Header from './components/Header';
import Campaigns from './Campaigns';
import Footer from './components/Footer';

import './Normalizr.css';

class App extends Component {
  render() {
    return (
      <Wrapper className="App">
        <Header />
        <Campaigns />
        <Footer />
      </Wrapper>
    );
  }
}

const Wrapper = styled('div')`
    text-align: center;
    position: relative;
    margin: 0;
    padding: 0;
    border: 0;
    font-family: Roboto, sans-serif;
`

export default App;
