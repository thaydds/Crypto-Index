import React from 'react';
import styled from 'styled-components';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

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

const StyledMaskInput = styled(MaskedInput)`
  margin: 5px;
  display: inline-block;
  height: 38px;
  padding: 0 15px;
  color: #555;
  width: ${(props) => (props.width ? `${props.width}px` : '300px')};
  letter-spacing: 0.1rem;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #bbb;
  cursor: pointer;
  box-sizing: border-box;
  outline: 0;

  :focus {
    border: 1px solid #2bcc9e;
  }
`;

export const CurrencyInput = ({ ...inputProps }: any) => {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
  });
  return <StyledMaskInput mask={currencyMask} {...inputProps} />;
};
