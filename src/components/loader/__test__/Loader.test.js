import React from 'react';
import { screen, render } from '@testing-library/react';
import { Loader } from '../Loader';

describe('Loader', () => {
  it('should show loader when isLoading is true', async () => {
    render(<Loader isLoading />);

    const loader = await screen.findByText('Loading...');

    expect(loader).toBeInTheDocument();
  });

  it('should not show loader when isLoading is false', async () => {
    render(<Loader isLoading={false} />);

    const loader = screen.queryByText('Loading...');

    expect(loader).not.toBeInTheDocument();
  });
});
