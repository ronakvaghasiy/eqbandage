import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../app/page';
import React from 'react';

describe('Sample Test', () => {
  it('renders welcome message', () => {
    render(<Home />);
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });
});
