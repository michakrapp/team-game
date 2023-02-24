import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders headline', () => {
  render(<App />);
  const headline = screen.getByText(/Team Game/i);
  expect(headline).toBeInTheDocument();
});
