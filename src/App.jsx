import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/board";
import { auth, database } from "./firebase-config";
import { ref, onValue } from "firebase/database";
import NewPlayer from "./components/newPlayer";
import { deleteData } from "./api/Api";

function App() {
  const [score, setScore] = useState(0);
  const [users, setUsers] = useState(null);
  const [newPlayer, setNewPlayer] = useState(true);
  const [player, setPlayer] = useState({});

  const checkPlayer = (obj) => {
    if (!obj) return;
    for (const key in obj) {
      console.log(`${key}: ${obj[key]}`);
      if (key === player.id) {
        setPlayer({ ...player, ...obj[key] });
        setNewPlayer(false);
      }
    }
  };

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

  useEffect(() => {
    const dbRef = ref(database, "players");
    const unsubscribe = onValue(dbRef, (snapshot) => {
      checkPlayer(snapshot.val());
      setUsers(snapshot.val());
    });
    return () => unsubscribe();
  }, []);

  console.log("##users", player, users);
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
        <button
          onClick={() => {
            deleteData(player?.id);
          }}
        >
          Reset
        </button>
      </div>
      <Board
        rows={9}
        cols={12}
        setScore={setScore}
        players={users}
        player={player}
      />
    </>
  );
}

export default App;
