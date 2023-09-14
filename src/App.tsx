import AddInput from "./components/inputs/AddInput";

function App() {
  return (
    <div className="bg-blue-200 h-screen w-screen">
      <div className="font-extrabold text-black-300 text-3xl">LiveHeats Technical Test</div>
      <div className="">
        <AddInput placeholder={'Enter Student Name'} buttonLabel={"Add"} onClick={()=>console.log('w')} />
      </div>
    </div>
  );
}

export default App;
