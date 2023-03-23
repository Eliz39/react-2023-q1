import React, { Component } from 'react';
import styled from 'styled-components';
import { colourOptions } from '../colors';

export default class FormPage extends Component {
  render() {
    return (
      <Div>
        <Form>
          <label>
            Name
            <Input type="text" required />
          </label>

          <label>
            Surname
            <Input type="text" required />
          </label>

          <SwitcherDiv>
            <input type="radio" id="radio-one" name="gender" value="male" />
            <label htmlFor="radio-one">Male</label>
            <input type="radio" id="radio-two" name="gender" value="female" />
            <label htmlFor="radio-two">Female</label>
          </SwitcherDiv>

          <label>
            Birthday
            <Input type="date" required />
          </label>

          <label>
            Favourite color
            <Select required>
              {colourOptions.map((option) => {
                return (
                  <option value={option.value} key={option.value}>
                    {option.label}
                  </option>
                );
              })}
            </Select>
          </label>

          <label>
            <SpanLabel>Upload a profile photo</SpanLabel>
            <InputFile type="file" name="photo" />
          </label>

          <CheckboxLabel>
            <Checkbox type="checkbox" defaultChecked required />I consent to my personal data
          </CheckboxLabel>

          <Button type="submit">Submit</Button>
        </Form>
      </Div>
    );
  }
}

const Div = styled.div`
  height: max-content;
  width: calc(100% - 40px);
  color: #fff;
  margin: 30px;
`;
const Form = styled.form``;
const Input = styled.input`
  box-sizing: border-box;
  display: block;
  width: 300px;

  outline: none;
  padding: 0.375rem 0.75rem;
  margin-bottom: 15px;

  font-size: 1rem;
  line-height: 1.5;
  color: #495057;

  background-color: rgb(246 246 246);
  background-clip: padding-box;

  border: 1px solid #ced4da;
  border-radius: 0.25rem;

  transition: all 0.25s ease-in-out;
`;
const SwitcherDiv = styled.div`
  display: flex;
  margin-bottom: 15px;
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
    color: #051218;
    font-size: 14px;
    line-height: 1;
    text-align: center;
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
const Select = styled.select`
  display: block;
  width: 300px;

  outline: none;
  padding: 0.375rem 0.75rem;
  margin-bottom: 15px;

  font-size: 1rem;
  line-height: 1.5;
  color: #495057;

  background-color: rgb(246 246 246);
  background-clip: padding-box;

  border: 1px solid #ced4da;
  border-radius: 0.25rem;

  transition: all 0.25s ease-in-out;
`;
const SpanLabel = styled.span`
  margin-right: 15px;
`;
const InputFile = styled.input`
  box-sizing: border-box;
  margin-bottom: 15px;

  &::-webkit-file-upload-button {
    visibility: hidden;
  }

  &::before {
    content: 'Select...';
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 8px 12px;
    outline: none;
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
  }
`;
const Checkbox = styled.input`
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
const Button = styled.button`
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  padding: 10px 15px;
  background: #177fab;
  color: #fff;
  outline: none;
  border-radius: 6px;
  user-select: none;
  border: 1px solid transparent;
  font-size: 16px;
  cursor: pointer;
  margin: 25px 0;
  transition: all 0.3s;

  &:hover {
    background: #156588;
  }
`;
