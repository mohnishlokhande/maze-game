import { homeBoard } from "../../utils/board";
import Tile from "../tile";
import styles from "../board/Board.module.css";
import styles2 from "./Home.module.css";
import { useEffect, useRef, useState } from "react";
import Character from "../character";
import { getTime, handleKeyDownEvents } from "../../utils/helper";
import {
  useEditorStore,
  useMyPlayerStore,
  usePlayersStore,
} from "../../store/playerStates";

export default function Home() {
  const { myPlayer, setPage } = useMyPlayerStore();
  const { players } = usePlayersStore();
  const { isTyping, setIsTyping } = useEditorStore();
  const { x, y } = myPlayer;
  const boardRef = useRef(null);
  const [hint, setHint] = useState(
    "Press Enter to type message, and again Enter to send it. Esc to cancel or delete. Hold shift to move other players."
  );

  const typingCallback = () => {
    boardRef?.current?.blur();
    setIsTyping(true);
  };

  const handleKeyDown = (event) => {
    event.preventDefault();
    // console.log("##keydown", event);
    handleKeyDownEvents(
      myPlayer,
      event.key,
      event.shiftKey,
      setPage,
      typingCallback,
      players,
      homeBoard
    );
  };

  useEffect(() => {
    if (x === 0 && y === 4) {
      setHint("Press enter");
    } else {
      setHint(
        "Press Enter to type message, and again Enter to send it. Esc to cancel or delete. Hold shift to move other players."
      );
    }
  }, [x, y]);

  useEffect(() => {
    if (boardRef) {
      boardRef?.current?.focus();
    }
  }, []);

  useEffect(() => {
    if (!isTyping) {
      boardRef?.current?.focus();
    }
  }, [isTyping]);

  return (
    <div className={styles2.homeContainer}>
      {/* Living area
      <div className={styles2.hint}>Hint: {hint}</div> */}
      <div className={styles2.col}>
        <div className={styles2.hint}>Hint: {hint}</div>
        <div className={styles2.heading}>Active players</div>
        {players?.map((p) => {
          const timeAgo = getTime(p?.modifiedAt);
          return (
            <div key={p.id} className={styles2.activePlayer}>
              <div className={styles2.row}>
                <span style={{ paddingRight: "4px" }}>
                  {timeAgo?.isActive ? "🟢" : "🔴"}
                </span>
                {p.name}
              </div>
              <div>{timeAgo?.time}</div>
            </div>
          );
        })}
      </div>
      <div
        className={styles2.home}
        tabIndex="0"
        onKeyDown={handleKeyDown}
        ref={boardRef}
      >
        <h2>Living area</h2>
        <div>
          {players?.map((p) => {
            return <Character key={p.id} p={p} site="home" />;
          })}
          {homeBoard.map((row, rowIndex) => {
            return (
              <div key={rowIndex} className={styles.row}>
                {row.map((col, colIndex) => {
                  return <Tile key={colIndex} type={col} site="home" />;
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles2.col}>Recent Chats</div>
    </div>
  );
}
