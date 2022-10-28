import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Cart from "./components/Cart";

describe("Cart", () => {
    it("renders correct heading", () => {
      const { getByText } = render(<Cart />);
      expect(getByText("This is the Shopping Page!").textContent).toMatch(/this is the shopping page!/i);
    });

    it("moves number to 1 after click", () => {
        render(<Cart />);
        const button = screen.getAllByText("+")[0];
    
        userEvent.click(button);
    
        expect(screen.getAllByRole("spinbutton")[0].value).toMatch(/1/i);
      });

    it("adds to cart", () => {
        render(<Cart />);
        const button = screen.getAllByRole('button')[1];
        const input = screen.getAllByRole("spinbutton")[0]
        userEvent.type(input, '1')
        userEvent.click(button);
    
        expect(screen.getByText("Items in cart: 1").textContent).toMatch(/Items in cart: 1/i);
      });
  });