import { useRaceContext } from "../../RaceContext";
import Button from "../Button";
import Input from "./Input";

interface Props {
  placeholder: string;
  buttonLabel: string;
  onClick: () => void;
  onChange: (e: any) => void;
  value: string;
  className?: string;
}

export default function AddInput({
  buttonLabel,
  onClick,
  onChange,
  value,
  placeholder,
  className,
}: Props) {
  const { raceState } = useRaceContext();

  return (
    <div className={`${className} flex flex-row justify-center pb-2`}>
      <Input placeholder={placeholder} onChange={onChange} value={value} />
      <Button
        className={"ml-2"}
        label={buttonLabel}
        onClick={onClick}
      />
    </div>
  );
}
