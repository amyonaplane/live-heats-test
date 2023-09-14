interface DropdownProps {
  name: string;
  id: string;
  array: any[];
}

export default function Dropdown({name, id, array}: DropdownProps) {
  return (
    <select name={name} id={id}>
      {array.map((arrayItem, i) => (
        <option value={i + 1}>{i + 1}</option>
      ))}
    </select>
  );
}
