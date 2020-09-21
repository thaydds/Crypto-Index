/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNav } from './Nav.styled';

interface OwnProps {
  handleClick: () => void;
}

export const Nav = ({ handleClick }: OwnProps) => (
  <StyledNav>
    <div className="nav_container">
      <h1 className="nav_container__logo">
        <a href="/">Crypto</a>
      </h1>
      <ul className="nav_container__routes">
        <li>
          <Link to="/atualizar">Atualizar Moedas</Link>
        </li>
        <li>
          <a onClick={handleClick}>Sair</a>
        </li>
      </ul>
    </div>
  </StyledNav>
);
