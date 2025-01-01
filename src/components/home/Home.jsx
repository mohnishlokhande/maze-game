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
import Editor from "../editor";

export default function Home(props) {
  const { players = [], myPlayer, setPage } = props;
  const { x, y, id, vector } = myPlayer;
  const boardRef = useRef(null);
  const [hint, setHint] = useState(
    "Press Enter to type message, and again Enter to send it. Esc to cancel or delete."
  );
  const [isTyping, setIsTyping] = useState(false);
  const [msg, setMsg] = useState("");

  const alreadyOccupied = (x, y) => {
    return players.some((p) => p.x === x && p.y === y);
  };

  const checkValidMove = (x, y) => {
    if (x < 0 || x >= homeBoard[0].length || y < 0 || y >= homeBoard.length)
      return 2;
    else if (homeBoard[y][x] === TILE_TYPES.WATER) return 0;
    else if (alreadyOccupied(x, y)) return 0;
    else return 1;
  };

  const onEnter = () => {
    if (checkValidMove(x, y) === 2) return;
    if (homeBoard[y][x] === TILE_TYPES.GAME) {
      updateData(id, { page: "forest" });
      setPage("forest");
    } else if (homeBoard[y][x] === TILE_TYPES.FREE_WAY) {
      updateData(id, { page: "freeway" });
      setPage("freeway");
    } else if (homeBoard[y][x] === TILE_TYPES.SELL_APPLE) {
      updateData(id, { score: 0 });
    } else if (checkValidMove(x, y) === 1) {
      boardRef?.current?.blur();
      setIsTyping(true);
      updateData(id, { isTyping: true });
    }
  };

  const handleKeyDown = (event) => {
    event.preventDefault();
    let updatedData = {};
    switch (event.key) {
      case "ArrowUp":
        updatedData = { dir: 0, vector: (vector + 1) % 4 };
        if (checkValidMove(x, y - 1)) updatedData.y = y - 1;
        updateData(id, updatedData);
        break;
      case "ArrowRight":
        updatedData = { dir: 1, vector: (vector + 1) % 4 };
        if (checkValidMove(x + 1, y)) updatedData.x = x + 1;
        updateData(id, updatedData);
        break;
      case "ArrowDown":
        updatedData = { dir: 2, vector: (vector + 1) % 4 };
        if (checkValidMove(x, y + 1)) updatedData.y = y + 1;
        updateData(id, updatedData);
        break;
      case "ArrowLeft":
        updatedData = { dir: 3, vector: (vector + 1) % 4 };
        if (checkValidMove(x - 1, y)) updatedData.x = x - 1;
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
                  return <Tile key={colIndex} type={col} />;
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
