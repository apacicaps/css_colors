import React, { Component } from 'react';
import Colors from './modules/Colors';
import Header from './modules/Header';
import styled from 'styled-components';

const Container = styled.div`
    background: linear-gradient(180deg,rgba(127,255,212,.4) 0,hsla(15,72%,70%,.4) 67%,rgba(127,255,212,.8));
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Colors />
      </Container>
    );
  }
}

export default App;
