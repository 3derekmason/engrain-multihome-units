import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders appbar with link to porfolio", () => {
  render(<App />);
  const link = screen.getByText(/derekmason.dev/i);
  expect(link).toBeInTheDocument();
});

test("renders welcome message", () => {
  render(<App />);
  const welcome = screen.getByText(/Engrain Assessment by Derek Mason/i);
  expect(welcome).toBeInTheDocument();
});
