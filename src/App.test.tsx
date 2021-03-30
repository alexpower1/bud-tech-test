import "@testing-library/jest-dom/extend-expect";
import "whatwg-fetch";

import { render, screen, waitFor } from "@testing-library/react";

import App from "./App";
import React from "react";
import { Transaction } from "../types";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("should render the application with correctly ordered transactions", async () => {
    render(<App />);

    await waitFor(() =>
      expect(screen.getByText("Monzo Statement")).toBeInTheDocument()
    );
    expect(screen.getByText("Account Number: 12345678")).toBeInTheDocument();
    expect(screen.getByText("Sort Code: 12-34-56")).toBeInTheDocument();
    expect(screen.getByText("Current Account")).toBeInTheDocument();
    expect(screen.getByText("GBP 1250.32")).toBeInTheDocument();

    const transactionValues = screen.getAllByTestId("transaction-value");
    expect(transactionValues).toHaveLength(10);
    expect(
      transactionValues.every(
        (value, index) => index === 0 || value <= transactionValues[index - 1]
      )
    ).toBeTruthy();
  });
});
