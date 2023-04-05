import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('Check label', () => {
    render(
      <Input type="text" referense={React.createRef()} label="test" error={false} message="error" />
    );

    expect(screen.getByText('test')).toBeVisible();
  });

  it('Check default checked', () => {
    render(
      <Input type="text" referense={React.createRef()} label="test" error={false} message="error" />
    );
    expect((screen.getByRole('textbox') as HTMLInputElement).type).toBe('text');
  });

  it('Check error prop when true', () => {
    render(
      <Input type="date" referense={React.createRef()} label="test" error={true} message="error" />
    );
    expect(screen.getByText('error')).toBeVisible();
  });
});
