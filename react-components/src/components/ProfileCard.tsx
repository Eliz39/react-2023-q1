import React, { Component } from 'react';
import styled from 'styled-components';
import { FormPageProps } from '../pages/FormPage';

type ProfileCardProps = {
  id: number;
  data: FormPageProps;
};

export default class ProfileCard extends Component<ProfileCardProps> {
  render() {
    return (
      <Div_Card key={this.props.id}>
        <h5>{`${this.props.data.name} ${this.props.data.surname}`}</h5>
        {this.props.data.photo && (
          <Img src={URL.createObjectURL(this.props.data.photo)} alt={this.props.data.name} />
        )}
        <p>Sex: {this.props.data.sex}</p>
        <p>Birth Date: {this.props.data.birthDate}</p>
        <p>Favourite color: {this.props.data.color}</p>
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
