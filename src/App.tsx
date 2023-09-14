import { useState } from "react";
import AddInput from "./components/inputs/AddInput";
import RaceSpace from "./components/RaceSpace";
import Input from "./components/inputs/Input";
import Button from "./components/Button";

function App() {

  const studentNames = ['Amy', 'AMY', 'AmY']

  return (
    <div className="bg-blue-200 h-screen w-screen">
      <div className="font-extrabold flex flex-col items-center text-black-300 text-3xl py-3">
        LiveHeats Technical Test
      </div>
      <div className="">
        <AddInput buttonLabel="Add" placeholder="Enter student name" onClick={()=>{}} />
        <RaceSpace studentNames={studentNames} />
      </div>
    </div>
  );
}

export default App;
