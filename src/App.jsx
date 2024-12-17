import "./App.css";
import Board from "./components/board";

function App() {
  return (
    <>
      <Board rows={10} cols={15} />
    </>
  );
}

export default App;
