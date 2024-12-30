import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/board";
import { auth, database } from "./firebase-config";
import { ref, onValue } from "firebase/database";
import NewPlayer from "./components/newPlayer";
import { deleteData } from "./api/Api";
import Home from "./components/home";

function App() {
  const [newPlayer, setNewPlayer] = useState(true);
  const [myPlayer, setMyPlayer] = useState({});
  const [players, setPlayers] = useState([]);
  const [page, setPage] = useState("home");

  const checkPlayer = (obj) => {
    if (!obj) return;
    let list = [];
    for (const key in obj) {
      if (key === myPlayer.id) {
        setMyPlayer({ id: key, ...obj[key] });
        setNewPlayer(false);
      }
      list.push({ id: key, ...obj[key] });
    }
    setPlayers(list);
  };

  const onReset = () => {
    deleteData(myPlayer?.id);
    setNewPlayer(true);
    setMyPlayer({});
  };

  const backHome = () => {
    if (page === "home") return;
    setPage("home");
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        let temp = myPlayer;
        temp.id = user.uid;
        setMyPlayer(temp);
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
    });
    return () => unsubscribe();
  }, []);

  if (newPlayer) {
    return <NewPlayer user={myPlayer} setNewPlayer={setNewPlayer} />;
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
        <button onClick={backHome}>Home</button>
        <button onClick={onReset}>Reset</button>
      </div>
      {page === "home" && (
        <Home myPlayer={myPlayer} players={players} setPage={setPage} />
      )}
      {page === "forest" && (
        <Board rows={9} cols={12} myPlayer={myPlayer} players={players} />
      )}
    </>
  );
}

export default App;
