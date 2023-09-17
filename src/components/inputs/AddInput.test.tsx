import { render, fireEvent } from "@testing-library/react";
import AddInput from "./AddInput";
import Input from "./Input";

describe("AddInput", () => {
  const onClick = jest.fn();
  const onChange = jest.fn();

  const defaultProps = {
    placeholder: 'Enter student name',
    buttonLabel: 'Add',
    onClick: onClick,
    onChange: onChange,
    value: '',
    disabled: false
  };

  it("renders with default props", () => {
    const { getByPlaceholderText } = render(<AddInput {...defaultProps} />);

    const input = getByPlaceholderText("Enter student name");
    expect(input).toBeInTheDocument();
  });

  it("renders input and button components", () => {
    const { baseElement } = render(<AddInput {...defaultProps} />);
    
    expect(baseElement).toContainHTML('</input>')
    expect(baseElement).toContainHTML('</button>')
  });

  it("calls onClick() when button is clicked", () => {
    const { getByText } = render(<AddInput {...defaultProps} />);

    const button = getByText("Add");

    fireEvent.click(button);
    expect(onClick).toBeCalled();
  });

  it("calls onChange() when input change occurs", () => {
    const { getByPlaceholderText } = render(<AddInput {...defaultProps} />);

    const input = getByPlaceholderText("Enter student name");

    fireEvent.change(input, { target: { value: "23" } });
    expect(onChange).toBeCalled();
  });

  it("changes appearance when inactive", () => {
    const { container } = render(<AddInput {...defaultProps} disabled={true} />);

    const input = container.querySelector("input");
    expect(input).toHaveClass("pointer-none");
    expect(input).toHaveClass("opacity-50");

    const button = container.querySelector("button");
    expect(button).toHaveAttribute("disabled");
    expect(button).toHaveClass("pointer-none");
    expect(button).toHaveClass("opacity-50");
  });

  test("custom placeholders can be specified", () => {
    const { getByPlaceholderText } = render(
      <AddInput {...defaultProps} placeholder="New placeholder, who dis?" />
    );

    const input = getByPlaceholderText("New placeholder, who dis?");
    expect(input).toBeInTheDocument();
  });

  test("custom button labels can be specified", () => {
    const { getByText } = render(
      <AddInput {...defaultProps} buttonLabel="Reset" />
    );

    const button = getByText("Reset");
    expect(button).toBeInTheDocument();
  });
});
