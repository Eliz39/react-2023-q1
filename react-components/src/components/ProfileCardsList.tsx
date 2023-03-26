import React, { Component } from 'react';
import styled from 'styled-components';
import ProfileCard from './ProfileCard';
import { FormPageProps } from '../pages/FormPage';

type ProfileCardsListProps = {
  cards: FormPageProps[];
};

export default class ProfileCardsList extends Component<ProfileCardsListProps> {
  render() {
    return (
      <Div_CardsContainer>
        {this.props.cards.map((data, i: number) => {
          return <ProfileCard key={i} id={i} data={data} />;
        })}
      </Div_CardsContainer>
    );
  }
}

const Div_CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  text-align: center;
  place-items: center;

  color: black;

  margin-top: 20px;
`;
