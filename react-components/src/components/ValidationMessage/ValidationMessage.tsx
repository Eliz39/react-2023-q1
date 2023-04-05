import React, { Component } from 'react';
import styled from 'styled-components';

type ValidationMessageProps = React.HTMLAttributes<HTMLParagraphElement> & {
  message: string;
};

export default class ValidationMessage extends Component<ValidationMessageProps> {
  render() {
    return <P_Message>{this.props.message}</P_Message>;
  }
}

const P_Message = styled.p`
  color: #c94040;
  margin-top: 8px;
`;
