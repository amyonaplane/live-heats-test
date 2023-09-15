import { race } from "q";
import { useRaceContext } from "../RaceContext";
import Dropdown from "./Dropdown";

interface LaneProps {
  studentName: string;
}

export default function Lane({ studentName}: LaneProps) {
  const { raceState } = useRaceContext();

  return (
    <div className="bg-pink-100 flex flex-row p-6 mb-4">
        <Dropdown
          disabled={raceState.students.length < 2 || raceState.raceFinished }
          className="mr-5"
          name={"racePlaces"}
          id={"racePlaces"}
          array={raceState.students}
        />
      <div className="my-auto">{studentName}</div>
    </div>
  );
}
