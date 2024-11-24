// src/tests/TodoList.test.js
import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders TodoList component with initial todos', () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/Buy groceries/i);
  expect(todoItem).toBeInTheDocument();
});
