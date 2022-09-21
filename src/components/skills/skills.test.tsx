import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];
  test("Renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });
  test("Renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });
  test("Renders login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });
  test("Logout button not rendered", () => {
    render(<Skills skills={skills} />);
    const logoutButton = screen.queryByRole("button", {
      name: "Logout",
    });
    expect(logoutButton).not.toBeInTheDocument();
  });
  test("Logout button eventually rendered", async () => {
    render(<Skills skills={skills} />);
    const logoutButton = await screen.findByRole(
      "button",
      {
        name: "Logout",
      },
      { timeout: 2000 }
    );
    expect(logoutButton).toBeInTheDocument();
  });
});
