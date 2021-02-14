import React from 'react';
import { screen, render } from '@testing-library/react';
import { Button } from '../../components/Button';

describe('<Button/>', () => {
  it('should render the Button', () => {
    render(<Button type="button">Login</Button>);

    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('should render the colors correctly', () => {
    const { container } = render(<Button type="button">Login</Button>);
    expect(container.firstChild).toHaveStyle({ 'background-color': '#2bcc9e' });
  });
});
