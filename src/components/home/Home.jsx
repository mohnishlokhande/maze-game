// import { useEffect } from "react";
import { homeBoard } from "../../utils/board";
import { TILE_TYPES } from "../../utils/constants";
import Tile from "../tile";
import styles from "../board/Board.module.css";
import styles2 from "./Home.module.css";
import PropTypes from "prop-types";
import { updateData } from "../../api/Api";
import { useEffect, useRef, useState } from "react";
import Character from "../character";

export default function Home(props) {
  const textareaRef = useRef(null);
  const { players = [], myPlayer, setPage } = props;
  const { x, y, id, vector } = myPlayer;
  const boardRef = useRef(null);
  const [hint, setHint] = useState(
    "Press Enter to type message, and again Enter to send it. Esc to cancel or delete."
  );
  const [isTyping, setIsTyping] = useState(false);
  const [msg, setMsg] = useState("");
  const [rows, setRows] = useState(2);

  const checkValidMove = (x, y) => {
    if (x < 0 || x >= homeBoard[0].length || y < 0 || y >= homeBoard.length)
      return 2;
    else if (homeBoard[y][x] === TILE_TYPES.WATER) return 0;
    else return 1;
  };

  const onEnter = () => {
    if (homeBoard[y][x] === TILE_TYPES.GAME) {
      updateData(id, { page: "forest" });
      setPage("forest");
    } else if (checkValidMove(x, y) === 1) {
      setIsTyping(true);
      updateData(id, { isTyping: true });
    }
  };

  const handleKeyPress = (e) => {
    console.log("##keypress", e.key);
    if (e.key === "Enter" && !e.shiftKey && msg) {
      e.preventDefault();
      updateData(id, { isTyping: false, msg: msg });
      setIsTyping(false);
      setMsg("");
      setRows(2);
      boardRef?.current?.focus();
    } else if (e.key === "Enter" && e.shiftKey && rows < 16) {
      setRows((prev) => prev + 1);
    } else if (e.key === "Backspace" && rows > 2) {
      setRows((prev) => prev - 1);
    } else if (e.key === "Escape") {
      setIsTyping(false);
      setMsg("");
      updateData(id, { isTyping: false });
    }
  };

  const handleKeyDown = (event) => {
    console.log("##keydown", event.key);
    let updatedData = {};
    switch (event.key) {
      case "ArrowUp":
        if (!checkValidMove(x, y - 1)) return;
        updatedData = {
          y: y - 1,
          dir: 0,
          vector: (vector + 1) % 4,
        };
        updateData(id, updatedData);
        break;
      case "ArrowRight":
        if (!checkValidMove(x + 1, y)) return;
        updatedData = { x: x + 1, dir: 1, vector: (vector + 1) % 4 };
        updateData(id, updatedData);
        break;
      case "ArrowDown":
        if (!checkValidMove(x, y + 1)) return;
        updatedData = { y: y + 1, dir: 2, vector: (vector + 1) % 4 };
        updateData(id, updatedData);
        break;
      case "ArrowLeft":
        updatedData = { x: x - 1, dir: 3, vector: (vector + 1) % 4 };
        if (!checkValidMove(x - 1, y)) return;
        updateData(id, updatedData);
        break;
      case " ":
        break;
      case "Enter":
        onEnter();
        break;
      case "Escape":
        setMsg("");
        updateData(id, { isTyping: false, msg: "" });
        break;
      default:
        break;
    }
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
                return <Tile key={colIndex} type={col} />;
              })}
            </div>
          );
        })}
      </div>
      {isTyping && (
        <div className={styles2.editor}>
          <textarea
            ref={textareaRef}
            value={msg}
            autoFocus
            className={styles2.input}
            placeholder="Type your message..."
            onChange={(e) => {
              setMsg(e.target.value);
            }}
            onKeyPress={handleKeyPress}
            rows={rows.toString()}
          ></textarea>
        </div>
      )}
    </div>
  );
}

Home.propTypes = {
  players: PropTypes.array,
  myPlayer: PropTypes.object,
  setPage: PropTypes.func,
};
