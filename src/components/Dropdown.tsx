interface DropdownProps {
  name: string;
  id: string;
  array: any[];
  className?: string;
  disabled?: boolean;
  useArrayNumbers?: boolean;
}

export default function Dropdown({
  name,
  id,
  array,
  className,
  disabled,
  useArrayNumbers = false,
}: DropdownProps) {
  return (
    <select
      data-testid={"dropdown-select"}
      disabled={disabled}
      name={name}
      id={id}
      className={`${className} ${
        disabled ? "opacity-50 pointer-none" : ""
      } text-sm p-3 ${useArrayNumbers ? "w-[60px]" : ""}`}
    >
      {array.map((arrayItem, i) => (
        <option key={i} value={i + 1}>
          {useArrayNumbers ? `${i + 1}` : arrayItem}
        </option>
      ))}
    </select>
  );
}
