import React, { Component } from 'react';
import styled from 'styled-components';
import ValidationMessage from '../ValidationMessage/ValidationMessage';

type SwitcherProps = React.HTMLAttributes<HTMLInputElement> & {
  name: string;
  valueFirst: string;
  valueSecond: string;
  refFirst: React.RefObject<HTMLInputElement>;
  refSecond: React.RefObject<HTMLInputElement>;
  error: boolean;
  message: string;
};

export default class Switcher extends Component<SwitcherProps> {
  render() {
    return (
      <div>
        <SwitcherDiv>
          <input
            type="radio"
            id={this.props.valueFirst}
            name={this.props.name}
            value={this.props.valueFirst}
            ref={this.props.refFirst}
          />
          <label htmlFor={this.props.valueFirst}>{this.props.valueFirst}</label>
          <input
            type="radio"
            id={this.props.valueSecond}
            name={this.props.name}
            value={this.props.valueSecond}
            ref={this.props.refSecond}
          />
          <label htmlFor={this.props.valueSecond}>{this.props.valueSecond}</label>
        </SwitcherDiv>
        {this.props.error && <ValidationMessage message={this.props.message} />}
      </div>
    );
  }
}

const SwitcherDiv = styled.div`
  display: flex;
  margin-top: 5px;
  overflow: hidden;

  input {
    position: absolute;
    height: 1px;
    width: 1px;
    border: 0;
    overflow: hidden;

    &:checked + label {
      color: #fff;
      background-color: rgb(25 120 193);
      box-shadow: none;
    }
  }

  label {
    background-color: rgb(246 246 246);
    color: rgb(73, 80, 87);
    font-size: 14px;
    line-height: 1;
    text-align: center;
    text-transform: uppercase;
    padding: 8px 16px;
    margin-right: -1px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
    transition: all 0.1s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: #e4e4e4;
    }
  }

  label:first-of-type {
    border-radius: 4px 0 0 4px;
  }

  label:last-of-type {
    border-radius: 0 4px 4px 0;
  }
`;
