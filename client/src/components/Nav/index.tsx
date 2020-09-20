import React from 'react';
import { StyledNav } from './Nav.styled';

interface OwnProps {
  handleClick: () => void;
}

export const Nav = ({ handleClick }: OwnProps) => (
  <StyledNav>
    <div className="nav_container">
      <h1 className="nav_container__logo">
        <a href="/">Trybe</a>
      </h1>
      <ul className="nav_container__routes">
        <li>
          <button type="button" onClick={handleClick}>
            Sair
          </button>
        </li>
      </ul>
    </div>
  </StyledNav>
);
