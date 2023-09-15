import { useRaceContext } from "../../RaceContext";
import Button from "../Button";
import Input from "./Input";

interface Props {
  placeholder: string;
  buttonLabel: string;
  onClick: () => void;
  onChange: (e: any) => void;
  className?: string;
}

export default function AddInput({
  buttonLabel,
  onClick,
  onChange,
  placeholder,
}: Props) {
  const { raceState } = useRaceContext();

  return (
    <div className="flex flex-row justify-center">
      <Input placeholder={placeholder} onChange={onChange} />
      <Button
        disabled={raceState.raceStarted || raceState.currentStudentInput==''}
        className={"ml-2"}
        label={buttonLabel}
        onClick={onClick}
      />
    </div>
  );
}
