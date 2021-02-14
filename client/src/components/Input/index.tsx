import React from 'react';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { StyledInput, StyledMaskInput } from './styles';

export interface OwnProps {
  type?: 'text' | 'password' | 'number';
  placeholder?: string;
  isCurrency?: boolean;
}

const defaultMaskOptions = {
  prefix: '$',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 7, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false,
};

export const Input = ({
  placeholder,
  type,
  isCurrency = false,
  ...rest
}: OwnProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
  });

  return !isCurrency ? (
    <StyledInput placeholder={placeholder} type={type} {...rest} />
  ) : (
    <StyledMaskInput mask={currencyMask} {...rest} />
  );
};
