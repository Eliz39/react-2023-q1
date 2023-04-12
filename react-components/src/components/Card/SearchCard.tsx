import React from 'react';
import styled from 'styled-components';

export type SearchCardProps = {
  id: string;
  description: string;
  image: string;
};

export const SearchCard = (props: SearchCardProps) => {
  return (
    <Div_Card key={props.id}>
      <Img src={props.image} alt={props.description} />
      <p>Description: {props.description}</p>
    </Div_Card>
  );
};

const Div_Card = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
  max-width: 250px;
  width: max-content;
  height: max-content;
  padding: 15px;
  background: #fff;
  border-radius: 10px;
`;
const Img = styled.img`
  height: auto;
  max-width: 100%;
`;
