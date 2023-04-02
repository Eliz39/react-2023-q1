import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import ValidationMessage from './ValidationMessage';

describe('ValidationMessage', () => {
  it('Renders ValidationMessage', () => {
    render(<ValidationMessage message="error" />);

    expect(screen.getByText('error')).toBeVisible();
  });
});
