import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/board";
import { auth, database } from "./firebase-config";
import { ref, onValue } from "firebase/database";
import NewPlayer from "./components/newPlayer";

function App() {
  const [score, setScore] = useState(0);
  const [data, setData] = useState(null);
  const [newPlayer, setNewPlayer] = useState(true);
  const [player, setPlayer] = useState({});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("##user", user);
      if (user) {
        let temp = player;
        temp.id = user.uid;
        setPlayer(temp);
      } else {
        console.log("User signed out");
      }
    });
    return unsubscribe;
  }, [auth]);

  const checkPlayer = (obj) => {
    if (!obj) return;
    const keys = Object.keys(obj);
    console.log("##keys", keys, player, keys.includes(player.id));
    if (keys.includes(player.id)) {
      setNewPlayer(false);
    }
  };

  useEffect(() => {
    const dbRef = ref(database, "players");
    const unsubscribe = onValue(dbRef, (snapshot) => {
      checkPlayer(snapshot.val());
      setData(snapshot.val());
    });

    return () => unsubscribe();
  }, []);

  console.log("##data", player, data);
  if (newPlayer) {
    return <NewPlayer user={player} setNewPlayer={setNewPlayer} />;
  }

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
    </>
  );
}

export default App;
