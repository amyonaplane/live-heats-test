import Button from "../Button";
import Input from "./Input";

interface Props {
  placeholder: string;
  buttonLabel: string;
  onClick: () => void;
  className?: string;
}

export default function AddInput({ buttonLabel, onClick, placeholder }: Props) {
  return (
    <div className="flex flex-row">
      <Input placeholder={placeholder} />
      <Button className={"ml-2"} label={buttonLabel} onClick={onClick} />
    </div>
  );
}
