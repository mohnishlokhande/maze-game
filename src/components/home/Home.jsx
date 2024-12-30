// import { useEffect } from "react";
import { homeBoard } from "../../utils/board";
import { charDirection, TILE_TYPES } from "../../utils/constants";
import Tile from "../tile";
import styles from "../board/Board.module.css";
import styles2 from "./Home.module.css";
import PropTypes from "prop-types";
import { updateData } from "../../api/Api";
import { useEffect, useRef, useState } from "react";

export default function Home(props) {
  const { players = [], myPlayer, setPage } = props;
  const { x, y, id, score, vector } = myPlayer;
  const boardRef = useRef(null);
  const [hint, setHint] = useState("");

  const checkValidMove = (x, y) => {
    if (x < 0 || x >= homeBoard[0].length || y < 0 || y >= homeBoard.length)
      return true;
    else if (homeBoard[y][x] === TILE_TYPES.WATER) return false;
    else return true;
  };

  const onEnter = () => {
    if (homeBoard[y][x] === TILE_TYPES.GAME) {
      setPage("forest");
    }
  };

  const handleKeyDown = (event) => {
    console.log("##keydown", event.key);
    switch (event.key) {
      case "ArrowUp":
        if (!checkValidMove(x, y - 1)) return;
        updateData(id, y - 1, x, 0, (vector + 1) % 4, score);
        break;
      case "ArrowRight":
        if (!checkValidMove(x + 1, y)) return;
        updateData(id, y, x + 1, 1, (vector + 1) % 4, score);
        break;
      case "ArrowDown":
        if (!checkValidMove(x, y + 1)) return;
        updateData(id, y + 1, x, 2, (vector + 1) % 4, score);
        break;
      case "ArrowLeft":
        if (!checkValidMove(x - 1, y)) return;
        updateData(id, y, x - 1, 3, (vector + 1) % 4, score);
        break;
      case " ":
        break;
      case "Enter":
        onEnter();
        break;
      case "Escape":
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (x === 0 && y === 4) {
      setHint("Press enter");
    } else {
      setHint("");
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
          return (
            <div key={p.id}>
              <div
                className={`${styles.mycharacter} ${
                  styles[charDirection[p?.dir]]
                }`}
                style={{
                  transform: `translate(${p?.x * 6}rem, ${p?.y * 6}rem)`,
                  backgroundPosition: `${p?.vector * -44}px 0`,
                }}
              />
              <div
                className={styles.name}
                style={{
                  transform: `translate(${p?.x * 6}rem, ${p?.y * 6}rem)`,
                }}
              >
                {p.name}
              </div>
            </div>
          );
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
  );
}

Home.propTypes = {
  players: PropTypes.array,
  myPlayer: PropTypes.object,
  setPage: PropTypes.func,
};
