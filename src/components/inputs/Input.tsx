import { useRaceContext } from "../../RaceContext";

interface InputProps {
  placeholder?: string;
  onChange: (e: any) => void;
}

export default function Input({ placeholder, onChange }: InputProps) {
  const { raceState } = useRaceContext();

  return (
    <input
      disabled={raceState.raceStarted}
      className={`${raceState.raceStarted ? "pointer-none opacity-50" : ""} pl-2 bg-grey-100`}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
