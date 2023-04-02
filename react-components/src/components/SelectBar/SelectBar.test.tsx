import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import SelectBar from './SelectBar';
import { colourOptions } from '../colors';

describe('SelectBar', () => {
  it('Renders SelectBar label', () => {
    render(
      <SelectBar
        options={colourOptions}
        referense={React.createRef()}
        label="test"
        error={false}
        message="error"
      />
    );

    expect(screen.getByText('test')).toBeVisible();
  });

  it('Renders SelectBar options', () => {
    render(
      <SelectBar
        options={colourOptions}
        referense={React.createRef()}
        label="test"
        error={false}
        message="error"
      />
    );
    expect(screen.getAllByRole('option').length).toBe(colourOptions.length);
  });

  it('Renders SelectBar error message', () => {
    render(
      <SelectBar
        options={colourOptions}
        referense={React.createRef()}
        label="test"
        error={true}
        message="error"
      />
    );
    expect(screen.getByText('error')).toBeVisible();
  });
});
