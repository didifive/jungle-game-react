import { render, screen } from '@testing-library/react';
import App from './App';

test('renders game title and score', () => {
  render(<App />);
  const title = screen.getByText(/Jungle IR/i);
  const score = screen.getByText(/Score/i);
  expect(title).toBeInTheDocument();
  expect(score).toBeInTheDocument();
});
