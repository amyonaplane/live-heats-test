import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  const onClick = jest.fn();

  const defaultProps = {
    label: "Start",
    onClick: onClick,
  };

  it("renders with default props", () => {
    const { getByText, getByRole } = render(<Button {...defaultProps} />);

    const buttonLabel = getByText("Start");
    expect(buttonLabel).toBeInTheDocument();

    const button = getByRole("button");
    expect(button).not.toHaveAttribute("disabled");

    fireEvent.click(button);

    expect(onClick).toBeCalled();
  });

  it("changes appearance when inactive", () => {
    const { getByRole } = render(<Button {...defaultProps} disabled={true} />);

    const button = getByRole("button");
    expect(button).toHaveAttribute("disabled");
    expect(button).toHaveClass("pointer-none");
    expect(button).toHaveClass("opacity-50");
  });

  it("renders with custom label", () => {
    const { getByText } = render(<Button {...defaultProps} label="Reset" />);

    const buttonLabel = getByText("Reset");
    expect(buttonLabel).toBeInTheDocument();
  });
});
