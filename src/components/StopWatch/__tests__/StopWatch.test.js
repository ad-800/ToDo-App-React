import { render, screen } from '@testing-library/react';
import StopWatch from '../StopWatch';

test('Should Render StopWatch', () => {
  render(<StopWatch/>);
  const startButton = screen.getByTestId('first-button');
  expect(startButton).toHaveTextContent('Start');
});
