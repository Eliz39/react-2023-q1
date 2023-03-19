import React, { Component } from 'react';
import styled from 'styled-components';

export default class About extends Component {
  render() {
    return (
      <Div>
        <h1>About us</h1>
        <p data-testid="desc">This page is currently empty</p>
      </Div>
    );
  }
}
const Div = styled.div`
  height: calc(100vh - 40px);
  width: calc(100% - 40px);
  color: #fff;
`;
