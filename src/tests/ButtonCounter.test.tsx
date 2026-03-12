import ButtonCounter from "../ButtonCounter";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";

describe("ButtonCounter Component", () => {
  it("renders the button succesfully", async () => {
    render(<ButtonCounter />);
    const button = screen.getByText("Click here!");
    await userEvent.click(button);
    expect(screen.getByText("You clicked: 1 times")).toBeInTheDocument();
    await userEvent.click(button);
    expect(screen.getByText("You clicked: 2 times")).toBeInTheDocument();
  });
});
