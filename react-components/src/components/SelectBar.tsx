import React, { Component } from 'react';
import styled from 'styled-components';
import { ColourOption } from '../colors';
import ValidationMessage from './ValidationMessage';

type SelectBarProps = React.HTMLAttributes<HTMLSelectElement> & {
  label: string;
  referense: React.RefObject<HTMLSelectElement>;
  options: ColourOption[];
  error: boolean;
  message: string;
};

export default class SelectBar extends Component<SelectBarProps> {
  render() {
    return (
      <div>
        <label>
          {this.props.label}
          <Select ref={this.props.referense}>
            {this.props.options.map((option) => {
              return (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              );
            })}
          </Select>
        </label>
        {this.props.error && <ValidationMessage message={this.props.message} />}
      </div>
    );
  }
}

const Select = styled.select`
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
