import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("renders successfully", () => {
    render(<App />);
    const heading = screen.getByText("LiveHeats Technical Test");
    expect(heading).toBeInTheDocument();
  });
});
