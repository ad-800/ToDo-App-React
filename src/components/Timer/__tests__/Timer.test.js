import { render, screen } from '@testing-library/react';
import Timer from '../Timer';

test('Should Render Timer', () => {
  render(<Timer/>);
  const timer = screen.getByTestId('timer');
  const descendant = screen.getByTestId('descendant');
  expect(timer).toContainElement(descendant);
});
