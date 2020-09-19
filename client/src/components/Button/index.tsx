import React from 'react';
import { StyledButton } from './Button.styled';

interface OwnProps {
  type: 'button' | 'submit';
  children: React.ReactNode;
}

export const Button = ({
  type,
  children,
  ...rest
}: OwnProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <StyledButton type={type} {...rest}>
    {children}
  </StyledButton>
);
