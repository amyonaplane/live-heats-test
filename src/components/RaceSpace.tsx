import Lane from "./Lane";

interface RaceSpaceProps {
  studentNames: string[];
}

export default function RaceSpace({ studentNames }: RaceSpaceProps) {
  return (
    <div className="p-4 m-3 flex flex-1 flex-col overflow-scroll h-[380px] border-2 rounded-xl border-green-500">
      {studentNames.map((lane, i) => {
        return <Lane studentName={lane} key={i} />;
      })}
    </div>
  );
}
