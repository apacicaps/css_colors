import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColorBlock = styled.div`
  width: 6rem;
  height: 6rem;
  display: inline-block;
  background-color: ${props => props.colorName };
  border: 1px solid white;
  border-radius: 5px;
`;

const ColorName = styled.div`
  padding: 0.5rem;
  font-family: Raleway, sans-serif;
`;

const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  color: #999;
  width: 100px;
`;


export default class Color extends Component {

    render () {

        return(
          <ColorContainer>
            <ColorBlock colorName={this.props.colorName}/>
            <ColorName>{this.props.colorName}</ColorName>
          </ColorContainer>
        )

    }
}
