import React, { Component } from 'react';
import styled from 'styled-components';
import ValidationMessage from '../ValidationMessage/ValidationMessage';

type CheckboxProps = React.HTMLAttributes<HTMLInputElement> & {
  defaultChecked?: boolean;
  referense: React.RefObject<HTMLInputElement>;
  label: string;
  error: boolean;
  message: string;
};

export default class Checkbox extends Component<CheckboxProps> {
  render() {
    return (
      <div>
        <CheckboxLabel>
          <CheckboxInput
            type="checkbox"
            defaultChecked={this.props.defaultChecked}
            ref={this.props.referense}
          />
          {this.props.label}
        </CheckboxLabel>
        {this.props.error && <ValidationMessage message={this.props.message} />}
      </div>
    );
  }
}

const CheckboxInput = styled.input`
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;

  display: inline-block;
  width: 20px;
  height: 20px;

  border: 1px solid #177fab;
  border-radius: 6px;
  background-color: rgb(246 246 246);
  margin-right: 15px;

  position: relative;

  &:checked {
    background-color: rgb(25 120 193);

    &::after {
      content: '✓';
      display: block;
      width: 20px;
      height: 20px;
      position: absolute;
      top: calc(50% - 10px);
      left: 4px;
      color: #fff;
    }
  }

  &:focus {
    outline: none;
  }
`;
const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`;
