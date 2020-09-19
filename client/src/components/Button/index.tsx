import React from 'react';
import { StyledButton } from './Button.styled';

interface OwnProps {
  type: 'button' | 'submit';
  children: React.ReactNode;
}

export const Button = ({ type, children }: OwnProps) => (
  <StyledButton type={type}>{children}</StyledButton>
);
