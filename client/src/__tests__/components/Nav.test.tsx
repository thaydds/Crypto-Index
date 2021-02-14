import React from 'react';
import { renderWithRouter } from '../../utils/renderWithRouter';
import { Nav } from '../../components';

describe('<Nav/>', () => {
  it('should render the Nav', () => {
    const { getByText } = renderWithRouter(<Nav handleClick={() => false} />);
    const nav = getByText('Crypto');

    expect(nav).toBeInTheDocument();
  });
});
