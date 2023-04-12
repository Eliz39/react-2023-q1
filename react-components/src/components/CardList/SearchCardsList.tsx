import React from 'react';
import styled from 'styled-components';
import { SearchCardProps, SearchCard } from '../Card/SearchCard';

type SearchCardsListProps = {
  cards: SearchCardProps[];
};

const SearchCardsList = (props: SearchCardsListProps) => {
  return (
    <Div_CardsContainer>
      <>
        {props.cards.map((data, i: number) => {
          return (
            <SearchCard key={i} id={data.id} image={data.image} description={data.description} />
          );
        })}
      </>
    </Div_CardsContainer>
  );
};

const Div_CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  text-align: center;
  place-items: center;

  color: black;

  margin-top: 20px;
`;

export default SearchCardsList;
