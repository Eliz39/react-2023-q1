import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchCardsList from '../components/CardList/SearchCardsList';
import { ACCESS_KEY } from '../utils/ACCESS_KEY';
import { SearchCardProps } from '../components/Card/SearchCard';

type FetchedObj = {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
  };
};

const BASE_URL = `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`;

const Home = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [cardsData, setCardsData] = useState([] as SearchCardProps[]);
  const searchForRandomImages = () => {
    fetch(BASE_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => setFetchedData(data));
  };

  const searchForImagesByQuery = (input: string) => {
    fetch(`${BASE_URL}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => setFetchedData(data));
  };

  useEffect(() => {
    const value = window.localStorage.getItem('search-value') || '';
    if (value.length > 0) {
      searchForImagesByQuery(value);
    } else {
      searchForRandomImages();
    }
    setCardsData(
      fetchedData.map((obj: FetchedObj) => {
        return { id: obj.id, description: obj.alt_description, image: obj.urls.regular };
      })
    );
  }, []);

  return (
    <>
      <H1>Site Search</H1>
      <SearchBar searchFn={searchForImagesByQuery} />
      <SearchCardsList cards={cardsData} />
    </>
  );
};

const H1 = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 25px;
`;

export default Home;
