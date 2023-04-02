import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('Check label', () => {
    render(
      <Checkbox
        defaultChecked
        referense={React.createRef()}
        label="test"
        error={false}
        message="error"
      />
    );

    expect(screen.getByText('test')).toBeVisible();
  });

  it('Check default checked', () => {
    render(
      <Checkbox
        defaultChecked
        referense={React.createRef()}
        label="test"
        error={false}
        message="error"
      />
    );
    expect((screen.getByRole('checkbox') as HTMLInputElement).checked).toBeTruthy();
  });

  it('Check error prop when true', () => {
    render(
      <Checkbox
        defaultChecked
        referense={React.createRef()}
        label="test"
        error={true}
        message="error"
      />
    );
    expect(screen.getByText('error')).toBeVisible();
  });
});
