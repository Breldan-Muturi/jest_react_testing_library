//Greet should render the text hello, and if a name is passed into the component It should render hello followed by the name

import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test("Renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });

  test("Renders a name", () => {
    render(<Greet name="Breldan" />);
    const textElement = screen.getByText("Hello Breldan");
    expect(textElement).toBeInTheDocument();
  });
});
