import Button from "./components/Button";
import AddInput from "./components/inputs/AddInput";
import RaceSpace from "./components/RaceSpace";
import { useRaceContext } from "./RaceContext";

function App() {
  const { raceState, setRaceState } = useRaceContext();

  return (
    <div className="bg-blue-200 h-screen w-screen">
      <div className="font-extrabold flex flex-col items-center text-black-300 text-3xl py-3">
        LiveHeats Technical Test
      </div>
      <div className="">
        <AddInput
          buttonLabel="Add"
          placeholder="Enter student name"
          onClick={() => {
            const arr = raceState.students.concat(
              raceState.currentStudentInput
            );
            setRaceState("students", arr);
          }}
          onChange={(e) =>
            setRaceState("currentStudentInput", e.currentTarget.value)
          }
        />
        <Button
          label="Start"
          onClick={() => setRaceState("raceStarted", true)}
        />
        <Button
          label="Reset"
          onClick={() => setRaceState("raceStarted", false)}
        />
        <RaceSpace studentNames={raceState.students} />
      </div>
    </div>
  );
}

export default App;
