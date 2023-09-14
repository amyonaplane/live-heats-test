interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export default function Button({ label, onClick, className }: ButtonProps) {
  return (
    <button
      className={`${className} p-1 bg-gray-100 rounded-lg border-2 border-solid`}
      onClick={() => onClick()}
    >
      {label}
    </button>
  );
}
