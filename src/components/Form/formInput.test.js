import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import FormInput from "./formInput";

test("sentence inputElement form inputElement should be rendered", () => {
  render(<FormInput />);
  const inputElement = screen.getByPlaceholderText(/sentence/i);
  expect(inputElement).toBeInTheDocument();
});

test("sentence render inputElement title ", () => {
  render(<FormInput />);
  const inputElement = screen.getByText(/Validate Input Field/i);
  expect(inputElement).toBeInTheDocument();
});

test("should render inputElement label ", () => {
  render(<FormInput />);
  const inputElement = screen.getByLabelText("Input your sentence");
  expect(inputElement).toBeInTheDocument();
});

test("sentence inputElement should be empty ", () => {
  render(<FormInput />);
  const inputElement = screen.getByPlaceholderText(/sentence/i);
  expect(inputElement.value).toBe("");
});

test("submit button should be disabled ", () => {
  render(<FormInput />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeDisabled();
});

test("error message should be invisbible", () => {
  render(<FormInput />);
  const errorElement = screen.queryByTestId("error");
  expect(errorElement).toBe(null);
});

test("sentence input value should change ", () => {
  render(<FormInput />);
  const userInputElement = screen.getByPlaceholderText(/sentence/i);
  const testValue = "Hello";
  fireEvent.change(userInputElement, { target: { value: testValue } });
  expect(userInputElement.value).toBe(testValue);
});

test("should display errors with invalid input", () => {
  render(<FormInput />);
  const userInputElement = screen.getByPlaceholderText(/sentence/i);

  const testValue = "i am testing a sentence";

  fireEvent.change(userInputElement, { target: { value: testValue } });
  const errorElement = screen.getAllByTitle("error");

  expect(errorElement).toBeTruthy();
});

test("submit button should not be disabled", () => {
  render(<FormInput />);
  const userInputElement = screen.getByPlaceholderText(/sentence/i);
  const buttonElement = screen.getByRole("button");

  const testValue = "I am valid testing a sentence.";

  fireEvent.change(userInputElement, { target: { value: testValue } });
  expect(buttonElement).not.toBeDisabled();
});


