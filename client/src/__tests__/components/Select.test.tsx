import React from 'react';
import { render, screen } from '@testing-library/react';
import { Select } from '../../components';

describe('<Input/>', () => {
  it('should render the Button', () => {
    render(<Select />);

    expect(screen.getByRole('option', { name: /brl/i })).toBeInTheDocument();
  });
  it('should render the Button with currency options', () => {
    render(<Select />);

    expect(screen.getByRole('option', { name: /brl/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /eur/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /cad/i })).toBeInTheDocument();
  });
});
