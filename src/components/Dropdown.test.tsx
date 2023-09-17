import { render } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  const defaultProps = {
    name: "myDropdown",
    id: "myDropdownId",
    array: [1, 2, 3, 4, 5],
  };

  it("renders component with default props", () => {
    const { getByTestId } = render(
      <Dropdown {...defaultProps} />
    );

    const select = getByTestId("dropdown-select");
    expect(select).toBeInTheDocument();
    expect(select).toHaveAttribute("name", "myDropdown");
    expect(select).toHaveAttribute("id", "myDropdownId");
  });

  it("renders option components", () => {
    const { getByTestId, getByDisplayValue } = render(
      <Dropdown {...defaultProps} />
    );

    const select = getByTestId("dropdown-select");
    expect(select).toBeInTheDocument();
    expect(select).toHaveAttribute("name", "myDropdown");
    expect(select).toHaveAttribute("id", "myDropdownId");

    const selectedOption = getByDisplayValue("1");
    expect(selectedOption).toBeInTheDocument();
  });

  it("renders inactive appearance", () => {
    const { getByTestId } = render(
      <Dropdown {...defaultProps} disabled={true} />
    );

    // Check if the select element is disabled
    const select = getByTestId("dropdown-select");
    expect(select).toHaveAttribute("disabled");
    expect(select).toHaveClass("pointer-none");
    expect(select).toHaveClass("opacity-50");
  });

  it("renders options from the given array", () => {
    const { getAllByRole } = render(<Dropdown {...defaultProps} />);

    // Check if the correct number of options is rendered
    const options = getAllByRole("option");
    expect(options).toHaveLength(5);

    // Check if the values and text content of options are correct
    options.forEach((option, index) => {
      expect(option).toHaveAttribute("value", `${index + 1}`);
      expect(option).toHaveTextContent(`${index + 1}`);
    });
  });
});
