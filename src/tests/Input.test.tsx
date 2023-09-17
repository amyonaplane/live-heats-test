import { render, fireEvent } from "@testing-library/react";
import Input from "../components/inputs/Input";

describe("Input", () => {
  const onChange = jest.fn();

  const defaultProps = {
    onChange: onChange,
    value: "",
    disabled: false,
    placeholder: "Enter student name",
  };

  it("renders with default props", () => {
    const { getByPlaceholderText } = render(<Input {...defaultProps} />);

    const input = getByPlaceholderText("Enter student name");
    expect(input).toBeInTheDocument();
  });

  it("calls onChange() when change occurs", () => {
    const { getByPlaceholderText } = render(<Input {...defaultProps} />);

    const input = getByPlaceholderText("Enter student name");

    fireEvent.change(input, { target: { value: "23" } });
    expect(onChange).toBeCalled();
  });

  it("changes appearance when inactive", () => {
    const { container } = render(<Input {...defaultProps} disabled={true} />);

    const input = container.querySelector("input");

    expect(input).toHaveClass("pointer-none");
    expect(input).toHaveClass("opacity-50");
  });

  test("custom placeholders can be specified", () => {
    const { getByPlaceholderText } = render(
      <Input {...defaultProps} placeholder="New placeholder, who dis?" />
    );

    const input = getByPlaceholderText("New placeholder, who dis?");
    expect(input).toBeInTheDocument();
  });
});
