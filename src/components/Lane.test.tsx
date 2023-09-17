import { render } from "@testing-library/react";
import Lane from "./Lane";

describe("Lane", () => {
  const defaultProps = {
    studentName: "Amy",
    dropdownOptions: ["1", "2", "3", "4", "5"],
  };

  it("renders with default props", () => {
    const { getByText } = render(<Lane {...defaultProps} />);

    const lane = getByText(defaultProps.studentName);
    expect(lane).toBeInTheDocument();
  });

  it("renders dropdown and div components", () => {
    const { baseElement } = render(<Lane {...defaultProps} />);

    expect(baseElement).toContainHTML("</dropdown>");
    expect(baseElement).toContainHTML("</div>");
  });
});
