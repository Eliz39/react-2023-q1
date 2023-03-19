import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import './Layout.css';
import BgImage from '../assets/bg.jpg';

export default class Layout extends Component {
  render() {
    return (
      <Wrapper>
        <Div_Nav>
          <p>Current page: {window.location.pathname === '/' ? 'Home' : 'About us'}</p>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/about">
            <p>About us</p>
          </Link>
        </Div_Nav>
        <Outlet />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: calc(100% - 40px);
  height: 100%;
  background-image: url(${BgImage});
  background-size: cover;
  padding: 20px;
`;
const Div_Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  color: #fff;

  a {
    text-decoration: none;
    color: #e9cbcb;
  }
`;