import React from 'react';
import { StyledInput } from './Input.styled';

interface OwnProps {
  type: 'text' | 'password';
  placeholder: string;
}

export const Input = ({ placeholder, type, ...rest }: OwnProps) => (
  <StyledInput placeholder={placeholder} type={type} {...rest} />
);
