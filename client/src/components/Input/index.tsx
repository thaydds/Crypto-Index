import React from 'react';
import { StyledInput } from './Input.styled';

interface OwnProps {
  type: 'text' | 'password' | 'number';
  placeholder: string;
}

export const Input = ({
  placeholder,
  type,
  ...rest
}: OwnProps & React.InputHTMLAttributes<HTMLInputElement>) => (
  <StyledInput placeholder={placeholder} type={type} {...rest} />
);
