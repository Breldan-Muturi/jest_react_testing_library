import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { CounterTwo } from "./counter-two";

describe("CounterTwo", () => {
  test("Renders correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByRole("heading", {
      name: /counter two/i,
    });
    expect(textElement).toBeInTheDocument();
  });
  test("Handlers are called", async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    const decrementButton = screen.getByRole("button", {
      name: "Decrement",
    });
    await user.click(incrementButton);
    await user.click(decrementButton);
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
