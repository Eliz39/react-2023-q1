import React, { Component } from 'react';
import styled from 'styled-components';

type MyState = {
  inputValue: string;
};

export default class SearchBar extends Component {
  state: MyState = {
    inputValue: '',
  };

  saveToLocalStorage = () => {
    window.localStorage.setItem('search-value', this.state.inputValue);
  };

  getFromLocalStorage = () => {
    if (window.localStorage.getItem('search-value') !== undefined) {
      return window.localStorage.getItem('search-value');
    }
  };

  componentDidMount(): void {
    window.addEventListener('beforeunload', () => {
      this.saveToLocalStorage();
    });
  }

  componentWillUnmount(): void {
    this.saveToLocalStorage();
    window.removeEventListener('beforeunload', () => {
      this.saveToLocalStorage();
    });
  }
  render() {
    return (
      <Div_InputWrapper>
        <InputField
          type="search"
          name="search"
          defaultValue={this.getFromLocalStorage() || ''}
          onChange={(e) => this.setState({ inputValue: e.target.value })}
          data-testid="search-input"
        />
        <SearchButton className="search-btn">search</SearchButton>
      </Div_InputWrapper>
    );
  }
}

const Div_InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-bottom: 30px;
`;

const InputField = styled.input`
  display: block;
  width: 100%;
  outline: none;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: all 0.25s ease-in-out;
`;

const SearchButton = styled.button`
  padding: 0.375rem 2.75rem;
  font-size: 1rem;
  line-height: 1.5;
  outline: none;
  color: #fff;
  background-color: #3564cb;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    background-color: #1142ad;
  }
`;
