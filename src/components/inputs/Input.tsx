import { useRaceContext } from "../../RaceContext";

interface InputProps {
  placeholder?: string;
}

export default function Input({ placeholder }: InputProps) {
  const { raceState } = useRaceContext();
  return (
    <input
      disabled={raceState.raceStarted}
      className={`${raceState.raceStarted ? 
        'pointer-none' : '' } bg-grey-100`}
      placeholder={placeholder}
    />
  );
}
