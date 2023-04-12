import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

type SearchBarProps = {
  searchFn: (value: string) => void;
};

const SearchBar = (props: SearchBarProps) => {
  const [inputSavedValue, setInputSavedValue] = useState(
    localStorage.getItem('search-value') || ''
  );
  const valueRef = useRef() as React.MutableRefObject<string>;

  useEffect(() => {
    valueRef.current = inputSavedValue;
  }, [inputSavedValue]);

  useEffect(() => {
    return function cleanup() {
      window.localStorage.setItem('search-value', valueRef.current);
      window.addEventListener('beforeunload', () => {
        window.localStorage.setItem('search-value', valueRef.current);
      });
    };
  }, []);

  return (
    <Div_InputWrapper>
      <InputField
        type="search"
        name="search"
        defaultValue={inputSavedValue}
        onChange={(e) => setInputSavedValue(e.target.value)}
        data-testid="search-input"
      />
      <SearchButton className="search-btn" onClick={() => props.searchFn(inputSavedValue)}>
        search
      </SearchButton>
    </Div_InputWrapper>
  );
};

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

export default SearchBar;
