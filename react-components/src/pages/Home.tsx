import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';

export default class Home extends Component {
  render() {
    return (
      <>
        <H1>Site Search</H1>
        <SearchBar />
        <CardList />
      </>
    );
  }
}

const H1 = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 25px;
`;
