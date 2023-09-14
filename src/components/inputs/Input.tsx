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
      className={`${raceState.raceStarted ? "pointer-none" : ""} bg-grey-100`}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
