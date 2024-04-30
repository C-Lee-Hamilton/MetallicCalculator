import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("renders calculator display", () => {
  const { getByPlaceholderText } = render(<App />);

  const display = getByPlaceholderText("calculator");

  expect(display).toBeInTheDocument();
});

test("clicking on digits updates display", () => {
  const { getByText, getByPlaceholderText } = render(<App />);

  const display = getByPlaceholderText("calculator");

  fireEvent.click(getByText("•"));

  expect(display).toHaveValue(".");

  fireEvent.click(getByText("2"));

  expect(display).toHaveValue(".2");
});

test("clicking on operators updates symbol state", () => {
  const { getByText } = render(<App />);

  fireEvent.click(getByText("+"));

  expect(getByText("+")).toBeInTheDocument();
});

test("running equations", () => {
  const { getByText, getByPlaceholderText } = render(<App />);
  const display = getByPlaceholderText("calculator");

  fireEvent.click(getByText("2"));

  fireEvent.click(getByText("+"));

  fireEvent.click(getByText("2"));
  fireEvent.click(getByText("+"));

  fireEvent.click(getByText("2"));
  fireEvent.click(getByText("x"));

  fireEvent.click(getByText("2"));

  fireEvent.click(getByText("="));

  expect(display).toHaveValue("12");
});
