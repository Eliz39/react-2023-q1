import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import About from './About';

describe('About', () => {
  it('Renders title', () => {
    render(<About />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('About us');
  });

  it('Renders desc', () => {
    render(<About />);
    expect(screen.getByTestId('desc')).toHaveTextContent('This page is currently empty');
  });
});
