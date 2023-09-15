import Lane from "./Lane";

interface RaceSpaceProps {
  studentNames: string[];
}

export default function RaceSpace({ studentNames }: RaceSpaceProps) {
  return (
    <div className="mt-5 m-2 flex flex-1 flex-col overflow-scroll h-[380px] border-2 rounded-xl border-green-500">
      {studentNames.map((lane) => {
        return <Lane studentName={lane} totalPlaces={studentNames.length} />;
      })}
    </div>
  );
}
