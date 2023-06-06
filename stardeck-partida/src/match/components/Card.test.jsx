import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  test("should show the card", () => {
    render(<Card id="test" />);
    expect(screen.getByText("test")).toBeDefined();
  });
});
