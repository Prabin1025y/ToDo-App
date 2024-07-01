import { useState } from "react";
import Todo from "./Todo";
import NepaliDateHello from "./components/NepaliDate";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <div className="h-screen w-screen ">
    <div className="h-screen w-screen bg-slate-900">
      <Todo />
      {/* <NepaliDateHello /> */}
    </div>
  );
}

export default App;
