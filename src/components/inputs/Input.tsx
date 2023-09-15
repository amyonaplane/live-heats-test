interface InputProps {
  onChange: (e: any) => void;
  value: string;
  disabled?: boolean;
  placeholder?: string;
}

export default function Input({ placeholder, onChange, value, disabled }: InputProps) {
  return (
    <input
      disabled={disabled}
      className={`${disabled? "pointer-none opacity-50" : ""} pl-2 bg-grey-100`}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
