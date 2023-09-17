import { useState } from "react";
import Button from "./components/Button";
import AddInput from "./components/inputs/AddInput";
import RaceSpace from "./components/RaceSpace";
import { useRaceContext } from "./RaceContext";
import { useModal } from "./ModalContext";
import Modal from "./Modal";
import { ErrorMessages } from "./enums/ErrorMessages";

function App() {
  const { raceState, setRaceState } = useRaceContext();
  const { showModal } = useModal();

  const [inputName, setInputName] = useState("");
  const [studentList, setStudentList] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  const errorModal = <Modal>{errorMessage}</Modal>;

  const preRaceButtons = (
    <div className="flex flex-row justify-center gap-2">
      <Button
        className="my-2 flex"
        label="Start Race"
        onClick={() => {
          if (raceState.raceStarted) {
            setErrorMessage(ErrorMessages.RACE_ACTIVE);
            showModal();
          } else if (studentList.length < 2) {
            setErrorMessage(ErrorMessages.NOT_ENOUGH_PARTICIPANTS);
            showModal();
          } else {
            setRaceState("raceStarted", true);
          }
        }}
      />
      <Button
        className="my-2 flex"
        label="Reset"
        onClick={() => window.location.reload()}
      />
    </div>
  );

  const postRaceButtons = (
    <div className="flex flex-row justify-center gap-2">
      <Button
        className="my-2 flex"
        label="Save Results"
        onClick={() => {
          if (!raceState.raceStarted) {
            setErrorMessage(ErrorMessages.RACE_NOT_STARTED);
            showModal();
          } else {
            setRaceState("raceFinished", true);
          }
        }}
      />
      <Button
        className="my-2 flex"
        label="Edit Results"
        onClick={() => setRaceState("raceFinished", false)}
      />
    </div>
  );
  return (
    <div className="bg-blue-200 h-screen w-screen">
      <div className="font-extrabold flex flex-col items-center text-black-300 text-3xl py-3">
        LiveHeats Technical Test
      </div>
      {errorModal}
      <AddInput
        value={inputName}
        disabled={raceState.raceStarted}
        buttonLabel="Add"
        placeholder="Enter student name"
        onClick={() => {
          if (inputName !== "") {
            setStudentList([...studentList, inputName]);
            setInputName("");
          } else {
            setErrorMessage(ErrorMessages.EMPTY_INPUT);
            showModal();
          }
        }}
        onChange={(e) => setInputName(e.currentTarget.value)}
      />
      {preRaceButtons}
      <RaceSpace studentNames={studentList} />
      {postRaceButtons}
    </div>
  );
}

export default App;
