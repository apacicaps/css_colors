import React, { Component } from 'react';
import Color from '../components/Color';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const WrapperRow = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default class Colors extends Component {

  render() {
    return (
      <Wrapper>


        <WrapperRow>
          <Color colorName="papayawhip"/>
          <Color colorName="palevioletred"/>
          <Color colorName="tomato"/>
        </WrapperRow>

        <WrapperRow>
          <Color colorName="mediumaquamarine"/>
          <Color colorName="darkseagreen"/>
          <Color colorName="mistyrose"/>
        </WrapperRow>

        <WrapperRow>
          <Color colorName="beige"/>
          <Color colorName="goldenrod"/>
          <Color colorName="mintcream"/>
        </WrapperRow>

      </Wrapper>

    )

  }
}
