import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import CardList from './CardList';

describe('CardList', () => {
  it('Renders card image', () => {
    render(<CardList />);
    expect(screen.getByAltText('Mona Lisa')).toBeVisible();
  });

  it('Renders card name', () => {
    render(<CardList />);
    expect(screen.getByText('Mona Lisa')).toBeVisible();
  });

  it('Renders card artist', () => {
    render(<CardList />);
    expect(screen.getAllByText('Artist: Leonardo da Vinci')).toHaveLength(2);
  });

  it('Renders card year', () => {
    render(<CardList />);
    expect(screen.getByText('Year: 1517')).toBeVisible();
  });

  it('Renders card movement', () => {
    render(<CardList />);
    expect(screen.getAllByText('Movement: Italian Renaissance')).toHaveLength(2);
  });

  it('Renders card location', () => {
    render(<CardList />);
    expect(screen.getByText('Location: Louvre, Paris')).toBeVisible();
  });
});
