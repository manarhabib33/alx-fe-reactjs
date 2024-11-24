import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

test("renders initial todos", () => {
  const { getByText } = render(<TodoList />);
  expect(getByText("Learn React")).toBeInTheDocument();
  expect(getByText("Build a Todo App")).toBeInTheDocument();
});

test("adds a new todo", () => {
  const { getByPlaceholderText, getByText } = render(<TodoList />);
  const input = getByPlaceholderText("Add a new todo");
  const addButton = getByText("Add");

  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.click(addButton);

  expect(getByText("New Todo")).toBeInTheDocument();
});

test("toggles todo completion", () => {
  const { getByText } = render(<TodoList />);
  const todoItem = getByText("Learn React");

  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: line-through");

  fireEvent.click(todoItem);
  expect(todoItem).not.toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  const { getByText, queryByText } = render(<TodoList />);
  const todoItem = getByText("Learn React");
  const deleteButton = todoItem.nextSibling;

  fireEvent.click(deleteButton);
  expect(queryByText("Learn React")).toBeNull();
});
