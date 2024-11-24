// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react'; // Ensure fireEvent is imported
import TodoList from '../components/TodoList';

test('renders TodoList component with initial todos', () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/Buy groceries/i);
  expect(todoItem).toBeInTheDocument();
});

test('can add a new todo', () => {
  render(<TodoList />);
  
  const button = screen.getByText(/Add Todo/i);  // Find the button that adds new todo
  fireEvent.click(button); // Simulate the button click
  
  const newTodo = screen.getByText(/New Todo/i);  // Verify if the new todo is rendered
  expect(newTodo).toBeInTheDocument();
});

test('can toggle the completion status of a todo', () => {
  render(<TodoList />);
  
  const todoItem = screen.getByText(/Buy groceries/i);
  fireEvent.click(todoItem);  // Simulate the click to toggle completion

  // Check that the todo item is marked as completed (assuming style or class change)
  expect(todoItem).toHaveStyle('text-decoration: line-through');
});

test('can delete a todo', () => {
  render(<TodoList />);
  
  const deleteButton = screen.getByText(/Delete/i); // Find the delete button
  fireEvent.click(deleteButton);  // Simulate the click to delete todo
  
  const todoItem = screen.queryByText(/Buy groceries/i); // Verify the todo is removed
  expect(todoItem).toBeNull();  // Should not be found in the document anymore
});
