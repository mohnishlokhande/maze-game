import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/board";
import { auth, database } from "./firebase-config";
import { ref, onValue } from "firebase/database";
import { writeData } from "./api/Api";

function App() {
  const [score, setScore] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // Handle user state changes here
      console.log("##user", user);
      if (user) {
        writeData(user.uid);
      } else {
        // User is signed out
      }
    });

    return unsubscribe; // Unsubscribe when component unmounts
  }, [auth]);

  useEffect(() => {
    const dbRef = ref(database, "players");
    const unsubscribe = onValue(dbRef, (snapshot) => {
      setData(snapshot.val());
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  console.log("##data", JSON.stringify(data), "|");

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
