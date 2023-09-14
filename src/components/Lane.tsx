import { useRaceContext } from "../RaceContext";

interface LaneProps {
  studentName: string;
  totalPlaces: number;
}

export default function Lane({ studentName, totalPlaces }: LaneProps) {
  const { raceState } = useRaceContext();

  return (
    <div className="bg-pink-100 flex-1 p-4 mb-10">
      {studentName}
      <select name="racePlaces" id="racePplaces">
        {raceState.students.map((student, i) => (
          <option value={i + 1}>{i + 1}</option>
        ))}
      </select>
    </div>
  );
}
