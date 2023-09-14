import Lane from "./Lane";

interface RaceSpaceProps {
  studentNames: string[];
}

export default function RaceSpace({ studentNames }: RaceSpaceProps) {
  return (
    <div className="flex flex-col">
      {studentNames.map((lane) => {
        return <Lane studentName={lane} totalPlaces={studentNames.length}></Lane>;
      })}
    </div>
  );
}
