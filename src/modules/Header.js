import React, { Component } from 'react';
import Color from '../components/Color';
import styled from 'styled-components';

const Wrapper = styled.section`
    font-family: Droid serif, sans-serif;
    display: flex;
    justify-content: center;
    /*background: #271447;*/
    padding: 5rem 1.25rem 3.75rem;
    color: rgba(255, 255, 255, 0.8);
    font-size: 42px;
`;

export default class Header extends Component {

  render() {
    return (
      <Wrapper>
        My favourite CSS colors
      </Wrapper>
    )

  }
}
