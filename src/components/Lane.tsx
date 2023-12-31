import { useRaceContext } from "../RaceContext";
import Dropdown from "./Dropdown";

interface LaneProps {
  studentName: string;
  dropdownOptions: string[];
}

export default function Lane({ studentName, dropdownOptions }: LaneProps) {
  const { raceState } = useRaceContext();

  return (
    <div className="bg-pink-100 flex flex-row p-6 mb-4">
      <Dropdown
        disabled={!raceState.raceStarted || raceState.raceFinished}
        className="mr-5"
        name={"racePlaces"}
        id={"racePlaces"}
        array={dropdownOptions}
        useArrayNumbers={true}
      />
      <Dropdown
        disabled={!raceState.raceStarted || raceState.raceFinished}
        className="m-auto mr-0"
        name={"studentNames"}
        id={"studentNames"}
        array={dropdownOptions}
      />
    </div>
  );
}
