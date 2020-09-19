import React from 'react';
import { StyledInput } from './Input.styled';

interface OwnProps {
  type: 'text' | 'password';
  placeholder: string;
}

export const Input = ({ placeholder, type }: OwnProps) => (
  <StyledInput placeholder={placeholder} type={type} />
);
