interface DropdownProps {
  name: string;
  id: string;
  array: any[];
  className?: string;
}

export default function Dropdown({name, id, array, className}: DropdownProps) {
  return (
    <select name={name} id={id} className={`${className} text-sm p-3 w-[50px]`}>
      {array.map((arrayItem, i) => (
        <option value={i + 1}>{i + 1}</option>
      ))}
    </select>
  );
}
