import { render, screen } from "@testing-library/react";
import { Button } from "../../lib/Button/Button";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("Button Component", () => {
  it("renders the button without crasing with default props", () => {
    render(<Button $variation="primary">Click!</Button>);
    const button = screen.getByText("Click!");
    expect(button).toBeInTheDocument();
  });
});
