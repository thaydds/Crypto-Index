import React from 'react';
import { StyledButton } from './Button.styled';

interface OwnProps {
  name: string;
}

export const Button = ({ name }: OwnProps) => (
  <StyledButton>{name}</StyledButton>
);
