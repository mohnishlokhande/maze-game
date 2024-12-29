import { useState } from "react";
import "./App.css";
import Board from "./components/board";
// import FreeWay from "./components/freeWay";

function App() {
  const [score, setScore] = useState(0);
  return (
    <>
      <div
        style={{
          padding: "1rem",
          fontWeight: "bolder",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div> Score: {score}</div>
        <button onClick={() => {}}>Reset</button>
      </div>
      <Board rows={9} cols={12} setScore={setScore} />
      {/* <FreeWay rows={10} cols={10} /> */}
    </>
  );
}

export default App;
