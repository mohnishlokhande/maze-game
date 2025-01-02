import { homeBoard } from "../../utils/board";
import Tile from "../tile";
import styles from "../board/Board.module.css";
import styles2 from "./Home.module.css";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import Character from "../character";
import Editor from "../editor";
import { handleKeyDownEvents } from "../../utils/helper";

export default function Home(props) {
  const { players = [], myPlayer, setPage } = props;
  const { x, y, id, vector } = myPlayer;
  const boardRef = useRef(null);
  const [hint, setHint] = useState(
    "Press Enter to type message, and again Enter to send it. Esc to cancel or delete."
  );
  const [isTyping, setIsTyping] = useState(false);
  const [msg, setMsg] = useState("");

  const handleKeyDown = (event) => {
    handleKeyDownEvents(
      id,
      x,
      y,
      vector,
      event,
      setMsg,
      setPage,
      setIsTyping,
      boardRef,
      players
    );
  };

  useEffect(() => {
    if (x === 0 && y === 4) {
      setHint("Press enter");
    } else {
      setHint(
        "Press Enter to type message, and again Enter to send it. Esc to cancel or delete."
      );
    }
  }, [x, y]);

  useEffect(() => {
    if (boardRef) {
      boardRef?.current?.focus();
    }
  }, []);

  return (
    <>
      <div
        className={styles2.home}
        tabIndex="0"
        onKeyDown={handleKeyDown}
        ref={boardRef}
      >
        Living area
        <div className={styles2.hint}>Hint: {hint}</div>
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
      <Editor
        id={id}
        isTyping={isTyping}
        msg={msg}
        boardRef={boardRef}
        setIsTyping={setIsTyping}
        setMsg={setMsg}
      />
    </>
  );
}

Home.propTypes = {
  players: PropTypes.array,
  myPlayer: PropTypes.object,
  setPage: PropTypes.func,
};
