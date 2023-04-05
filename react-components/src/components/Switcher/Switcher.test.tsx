import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Switcher from './Switcher';

describe('Switcher', () => {
  it('Renders Switcher', () => {
    render(
      <Switcher
        name="sex"
        valueFirst="male"
        valueSecond="female"
        refFirst={React.createRef()}
        refSecond={React.createRef()}
        error={false}
        message="error"
      />
    );

    expect(screen.getAllByRole('radio').length).toBe(2);
  });

  it('Renders Switcher options', () => {
    render(
      <Switcher
        name="sex"
        valueFirst="male"
        valueSecond="female"
        refFirst={React.createRef()}
        refSecond={React.createRef()}
        error={false}
        message="error"
      />
    );
    expect((screen.getAllByRole('radio')[0] as HTMLInputElement).name).toBe('sex');
    expect((screen.getAllByRole('radio')[1] as HTMLInputElement).name).toBe('sex');
  });

  it('Renders Switcher options', () => {
    render(
      <Switcher
        name="sex"
        valueFirst="male"
        valueSecond="female"
        refFirst={React.createRef()}
        refSecond={React.createRef()}
        error={false}
        message="error"
      />
    );
    expect((screen.getAllByRole('radio')[0] as HTMLInputElement).value).toBe('male');
    expect((screen.getAllByRole('radio')[1] as HTMLInputElement).value).toBe('female');
  });

  it('Renders Switcher error message', () => {
    render(
      <Switcher
        name="sex"
        valueFirst="male"
        valueSecond="female"
        refFirst={React.createRef()}
        refSecond={React.createRef()}
        error={true}
        message="error"
      />
    );
    expect(screen.getByText('error')).toBeVisible();
  });
});
