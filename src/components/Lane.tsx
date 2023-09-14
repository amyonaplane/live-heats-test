import { useRaceContext } from "../RaceContext";
import Dropdown from "./Dropdown";

interface LaneProps {
  studentName: string;
  totalPlaces: number;
}

export default function Lane({ studentName, totalPlaces }: LaneProps) {
  const { raceState } = useRaceContext();

  return (
    <div className="bg-pink-100 flex-1 p-4 mb-10">
      {studentName}
      <Dropdown
        name={"racePlaces"}
        id={"racePlaces"}
        array={raceState.students}
      />
    </div>
  );
}
