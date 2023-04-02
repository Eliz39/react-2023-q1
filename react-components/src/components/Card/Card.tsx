import React, { Component } from 'react';
import styled from 'styled-components';

type CardProps = {
  data: {
    id: string;
    name: string;
    artist: string;
    year: string;
    movement: string;
    location: string;
    image: string;
  };
};

export default class Card extends Component<CardProps> {
  render() {
    return (
      <Div_Card key={this.props.data.id}>
        <h5>{this.props.data.name}</h5>
        <Img src={this.props.data.image} alt={this.props.data.name} />
        <p>Year: {this.props.data.year}</p>
        <p>Artist: {this.props.data.artist}</p>
        <p>Movement: {this.props.data.movement}</p>
        <p>Location: {this.props.data.location}</p>
      </Div_Card>
    );
  }
}

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
