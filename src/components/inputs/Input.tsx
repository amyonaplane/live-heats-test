import { useRaceContext } from "../../RaceContext";

interface InputProps {
  onChange: (e: any) => void;
  value: string;
  placeholder?: string;
}

export default function Input({ placeholder, onChange, value }: InputProps) {
  const { raceState } = useRaceContext();

  return (
    <input
      disabled={raceState.raceStarted}
      className={`${raceState.raceStarted ? "pointer-none opacity-50" : ""} pl-2 bg-grey-100`}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
