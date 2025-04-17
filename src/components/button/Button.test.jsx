import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('it renders the button', () => {
  render(<Button />);
  const button = screen.getByText('Click Me');
  expect(button).toBeInTheDocument();
});
