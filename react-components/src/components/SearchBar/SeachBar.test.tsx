import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('Input', () => {
  it('Renders title', () => {
    render(<SearchBar />);
    expect(screen.getByTestId('search-input')).toBeEnabled();
  });

  it('Renders button', () => {
    render(<SearchBar />);
    expect(screen.getByRole('button')).toHaveTextContent('search');
  });
});
