import { render, screen } from "../../test-utils";
import { MuiMode } from "./mui-mode";

describe("MuiMode", () => {
  test("Renders text correctly", () => {
    render(<MuiMode />);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("dark mode");
  });
});
