interface DropdownProps {
  name: string;
  id: string;
  array: any[];
  className?: string;
  disabled?: boolean;
}

export default function Dropdown({name, id, array, className, disabled}: DropdownProps) {
  return (
    <select disabled={disabled} name={name} id={id} className={`${className} ${disabled ? 'opacity-50' : ''} text-sm p-3 w-[50px]`}>
      {array.map((arrayItem, i) => (
        <option key={i} value={i + 1}>{i + 1}</option>
      ))}
    </select>
  );
}
