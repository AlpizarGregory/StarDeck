import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Planet from "./Planet";

describe("Planet", () => {
  test("should show the planet", () => {
    render(<Planet id="test" image="" />);
    expect(screen.getByText("Log de partida")).toBeDefined();
  });
});
