import React from 'react';
import { render } from '@testing-library/react';
import { Input } from '../../components';

describe('<Input/>', () => {
  it('should render the Input', () => {
    const { getByPlaceholderText } = render(
      <Input type="text" placeholder="test" />,
    );
    const input = getByPlaceholderText('test');

    expect(input).toBeInTheDocument();
  });
  it('should render the CurrencyInput', () => {
    const { getByDisplayValue } = render(
      <Input type="text" placeholder="test" isCurrency value="0" />,
    );
    const input = getByDisplayValue('$0');

    expect(input).toBeInTheDocument();
  });
});
