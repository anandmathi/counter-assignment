// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react'
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  const component = render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMsg = screen.getByText(/Counter/);
  expect(counterMsg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const btn = screen.getByText('+');
  const count = screen.getByTestId('count');
  fireEvent.click(btn);
  expect(count).toHaveTextContent('1');
  fireEvent.click(btn);
  expect(count).toHaveTextContent('2');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const btn = screen.getByText('-');
  const count = screen.getByTestId('count');
  fireEvent.click(btn);
  expect(count).toHaveTextContent('-1');
  fireEvent.click(btn);
  expect(count).toHaveTextContent('-2');
});
