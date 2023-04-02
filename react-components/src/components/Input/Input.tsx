import React, { Component } from 'react';
import styled from 'styled-components';
import ValidationMessage from '../ValidationMessage/ValidationMessage';

type InputProps = React.HTMLAttributes<HTMLInputElement> & {
  type: string;
  label: string;
  referense: React.RefObject<HTMLInputElement>;
  error: boolean;
  message: string;
};

export default class Input extends Component<InputProps> {
  render() {
    return (
      <div>
        <Label>
          {this.props.label}
          <InputField type={this.props.type} ref={this.props.referense} />
        </Label>
        {this.props.error && <ValidationMessage message={this.props.message} />}
      </div>
    );
  }
}

const InputField = styled.input`
  box-sizing: border-box;
  display: block;
  width: 300px;

  outline: none;
  padding: 0.375rem 0.75rem;
  margin-top: 5px;

  font-size: 1rem;
  line-height: 1.5;
  color: #495057;

  background-color: rgb(246 246 246);
  background-clip: padding-box;

  border: 1px solid #ced4da;
  border-radius: 0.25rem;

  transition: all 0.25s ease-in-out;
`;
const Label = styled.label`
  /* margin-top: 20px; */
`;
