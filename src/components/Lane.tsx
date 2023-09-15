import { useRaceContext } from "../RaceContext";
import Dropdown from "./Dropdown";

interface LaneProps {
  studentName: string;
  totalPlaces: number;
}

export default function Lane({ studentName, totalPlaces }: LaneProps) {
  const { raceState } = useRaceContext();

  return (
    <div className="bg-pink-100 flex flex-row p-6 mb-10">
        <Dropdown
          disabled={raceState.students.length < 2 }
          className="mr-5"
          name={"racePlaces"}
          id={"racePlaces"}
          array={raceState.students}
        />
      <div className="my-auto">{studentName}</div>
    </div>
  );
}
