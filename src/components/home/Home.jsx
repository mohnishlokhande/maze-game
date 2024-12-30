// import { useEffect } from "react";
import { homeBoard } from "../../utils/board";
import { charDirection } from "../../utils/constants";
import Tile from "../tile";
import styles from "../board/Board.module.css";
import styles2 from "./Home.module.css";
import PropTypes from "prop-types";
import { updateData } from "../../api/Api";
import { useEffect, useRef } from "react";

export default function Home(props) {
  const { players = [], myPlayer } = props;
  const boardRef = useRef(null);

  const handleKeyDown = (event) => {
    console.log("##keydown", event.key);
    switch (event.key) {
      case "ArrowUp":
        updateData(
          myPlayer?.id,
          myPlayer?.y - 1,
          myPlayer?.x,
          0,
          (myPlayer?.vector + 1) % 4,
          myPlayer?.score
        );
        break;
      case "ArrowRight":
        updateData(
          myPlayer?.id,
          myPlayer?.y,
          myPlayer?.x + 1,
          1,
          (myPlayer?.vector + 1) % 4,
          myPlayer?.score
        );
        break;
      case "ArrowDown":
        updateData(
          myPlayer?.id,
          myPlayer?.y + 1,
          myPlayer?.x,
          2,
          (myPlayer?.vector + 1) % 4,
          myPlayer?.score
        );
        break;
      case "ArrowLeft":
        updateData(
          myPlayer?.id,
          myPlayer?.y,
          myPlayer?.x - 1,
          3,
          (myPlayer?.vector + 1) % 4,
          myPlayer?.score
        );
        break;
      case " ":
        break;
      case "Enter":
        break;
      case "Escape":
        break;
      default:
        break;
    }
  };

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
                {p.name} {p.score}
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
};
