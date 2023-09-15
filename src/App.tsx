import { useState } from "react";
import Button from "./components/Button";
import AddInput from "./components/inputs/AddInput";
import RaceSpace from "./components/RaceSpace";
import { useRaceContext } from "./RaceContext";

function App() {
  const { raceState, setRaceState } = useRaceContext();
  const [inputName, setInputName] = useState('')
  const [studentList, setStudentList] = useState<string[]>([])

  return (
    <div className="bg-blue-200 h-screen w-screen">
      <div className="font-extrabold flex flex-col items-center text-black-300 text-3xl py-3">
        LiveHeats Technical Test
      </div>
      <div className="">
        <AddInput
          value={inputName}
          buttonLabel="Add"
          placeholder="Enter student name"
          onClick={() => {
            setStudentList([...studentList, inputName])
            console.log(studentList)
            setInputName('')
          }}
          onChange={(e) =>
            setInputName(e.currentTarget.value)
          }
        />
        <div className="flex flex-row justify-center gap-2">
          <Button
            className="my-2 flex"
            label="Start"
            disabled={raceState.raceStarted}
            onClick={() => setRaceState("raceStarted", true)}
          />
          <Button
            className="my-2 flex"
            label="Reset"
            onClick={() => window.location.reload()}
          />
        </div>
        <RaceSpace studentNames={studentList} />
        <div className="flex flex-row justify-center gap-2">
          <Button
            className="my-2 flex"
            label="Save"
            disabled={raceState.raceFinished}
            onClick={() => setRaceState("raceFinished", true)}
          />
          <Button
            className="my-2 flex"
            label="Edit"
            onClick={() => setRaceState("raceFinished", false)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
