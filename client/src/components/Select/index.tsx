import React from 'react';
import { StyledSelect } from './styles';

export const Select = ({
  ...rest
}: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <StyledSelect {...rest}>
    <option disabled value="">
      Selecione a moeda
    </option>
    <option value="BRL">BRL</option>
    <option value="EUR">EUR</option>
    <option value="CAD">CAD</option>
  </StyledSelect>
);
