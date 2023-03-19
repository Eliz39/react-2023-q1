import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('Renders title', () => {
    render(<Input />);
    expect(screen.getByTestId('search-input')).toBeEnabled();
  });

  it('Renders button', () => {
    render(<Input />);
    expect(screen.getByRole('button')).toHaveTextContent('search');
  });
});
