import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/board";
import { auth, database } from "./firebase-config";
import { ref, onValue } from "firebase/database";
import NewPlayer from "./components/newPlayer";
import { deleteData, updateData } from "./api/Api";
import Home from "./components/home";
import FreeWay from "./components/freeWay/FreeWay";
import {
  useConversationStore,
  useMyPlayerStore,
  usePlayersStore,
} from "./store/playerStates";
import Editor from "./components/editor";

function App() {
  const [newPlayer, setNewPlayer] = useState(true);
  const { myPlayer, setMyPlayer, page, setPage } = useMyPlayerStore();
  const { setPlayers } = usePlayersStore();
  const { setConversations } = useConversationStore();

  const checkPlayer = (obj) => {
    if (!obj) return;
    let list = [];
    for (const key in obj) {
      if (key === myPlayer.id) {
        setMyPlayer({ id: key, ...obj[key] });
        setPage(obj[key].page);
        setNewPlayer(false);
      }
      list.push({ id: key, ...obj[key] });
    }
    setPlayers(list);
  };

  const onReset = () => {
    deleteData(`players/${myPlayer?.id}`);
    setNewPlayer(true);
    setMyPlayer({});
    window.location.reload();
  };

  const backHome = () => {
    if (page === "home") return;
    setPage("home");
    updateData(myPlayer?.id, { page: "home" });
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

  useEffect(() => {
    const dbRef = ref(database, "conversations");
    const unsubscribe = onValue(dbRef, (snapshot) => {
      setConversations(snapshot.val());
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
      {page === "home" && <Home />}
      {page === "forest" && <Board rows={9} cols={12} />}
      {page === "freeway" && <FreeWay rows={10} cols={10} />}
      <Editor />
    </>
  );
}

export default App;
