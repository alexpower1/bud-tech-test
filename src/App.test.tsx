import "@testing-library/jest-dom/extend-expect";
import "whatwg-fetch";

import { render, screen, waitFor } from "@testing-library/react";

import App from "./App";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("should render the provider details", async () => {
    render(<App />);

    await waitFor(() => expect(screen.getByText("Monzo")).toBeInTheDocument());
    expect(screen.getByText("Sort Code: 12-34-56")).toBeInTheDocument();
    expect(screen.getByText("Current Account")).toBeInTheDocument();
  });
});
