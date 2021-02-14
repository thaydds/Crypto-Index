import React from 'react';
import { StyledAnimatedText } from './styles';

export const AnimatedText = () => (
  <StyledAnimatedText>
    <div className="content">
      <div className="content__container">
        <p className="content__container__text">Bitcoin em:</p>

        <ul className="content__container__list">
          <li className="content__container__list__item">BRL</li>
          <li className="content__container__list__item">CAD</li>
          <li className="content__container__list__item">EUR</li>
          <li className="content__container__list__item">CNY</li>
        </ul>
      </div>
    </div>
  </StyledAnimatedText>
);
