import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./counter";

describe("Counter", () => {
  test("Renders correctly", () => {
    render(<Counter />);
    const numberElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(numberElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button", {
      name: "Increment",
    });
    expect(buttonElement).toBeInTheDocument();
  });
  test("Renders Count of 0", () => {
    render(<Counter />);
    const numberElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(numberElement).toHaveTextContent("0");
  });
  test("Renders Count of 1 after increment click", async () => {
    user.setup();
    render(<Counter />);
    const buttonElement = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(buttonElement);
    const numberElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(numberElement).toHaveTextContent("1");
  });
  test("Renders Count of 2 after increment clicking twice", async () => {
    user.setup();
    render(<Counter />);
    const buttonElement = screen.getByRole("button", {
      name: "Increment",
    });
    await user.dblClick(buttonElement);
    const numberElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(numberElement).toHaveTextContent("2");
  });
  test("Renders a count of 10 after clicking set", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await user.click(setButton);
    const countElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(countElement).toHaveTextContent("10");
  });
  test("elements are focused in the right order", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
