import { useRaceContext } from "../RaceContext";

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  label,
  onClick,
  className,
  disabled,
}: ButtonProps) {

  return (
    <button
      disabled={disabled}
      className={`${className} p-1 bg-gray-100 rounded-lg border-2 border-solid`}
      onClick={() => onClick()}
    >
      {label}
    </button>
  );
}
