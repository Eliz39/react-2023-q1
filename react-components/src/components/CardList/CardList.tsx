import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';
import { cardsData } from '../../cards';

export default class CardList extends Component {
  render() {
    return (
      <>
        <Div_CardsContainer>
          {cardsData.map((data) => {
            return <Card key={data.id} data={data} />;
          })}
        </Div_CardsContainer>
      </>
    );
  }
}

const Div_CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 15px;
  text-align: center;
  place-items: center;
`;
