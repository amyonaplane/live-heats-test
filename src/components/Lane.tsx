interface LaneProps {
  studentName: string;
  totalPlaces: number;
}

export default function Lane({ studentName, totalPlaces }: LaneProps) {
  return (
    <div className="bg-pink-100 flex-1 p-4 mb-10">
      {studentName}
    </div>
  );
}
