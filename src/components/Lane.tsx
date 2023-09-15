import { useRaceContext } from "../RaceContext";
import Dropdown from "./Dropdown";

interface LaneProps {
  studentName: string;
  dropdownOptions: string[];
}

export default function Lane({ studentName, dropdownOptions}: LaneProps) {
  const { raceState } = useRaceContext();

  return (
    <div className="bg-pink-100 flex flex-row p-6 mb-4">
        <Dropdown
          disabled={!raceState.raceStarted}
          className="mr-5"
          name={"racePlaces"}
          id={"racePlaces"}
          array={dropdownOptions}
        />
      <div className="my-auto">{studentName}</div>
    </div>
  );
}
