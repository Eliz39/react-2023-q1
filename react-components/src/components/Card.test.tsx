import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { cardsData } from '../cards';
import Card from './Card';

describe('Card', () => {
  it('Renders card image', () => {
    cardsData.map((data) => {
      render(<Card data={data} />);
    });

    expect(screen.getByAltText('Mona Lisa')).toBeVisible();
  });

  it('Renders card name', () => {
    cardsData.map((data) => {
      render(<Card data={data} />);
    });
    expect(screen.getByText('Mona Lisa')).toBeVisible();
  });

  it('Renders card artist', () => {
    cardsData.map((data) => {
      render(<Card data={data} />);
    });
    expect(screen.getAllByText('Artist: Leonardo da Vinci')).toHaveLength(2);
  });

  it('Renders card year', () => {
    cardsData.map((data) => {
      render(<Card data={data} />);
    });
    expect(screen.getByText('Year: 1517')).toBeVisible();
  });

  it('Renders card movement', () => {
    cardsData.map((data) => {
      render(<Card data={data} />);
    });
    expect(screen.getAllByText('Movement: Italian Renaissance')).toHaveLength(2);
  });

  it('Renders card location', () => {
    cardsData.map((data) => {
      render(<Card data={data} />);
    });
    expect(screen.getByText('Location: Louvre, Paris')).toBeVisible();
  });
});
