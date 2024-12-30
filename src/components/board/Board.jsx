import { useEffect, useRef, useState } from "react";
import Tile from "../tile";
import styles from "./Board.module.css";
import PropTypes from "prop-types";
import { TILE_TYPES } from "../../utils/constants";
import { generateRandomBoard } from "../../utils/helper";
import { updateData } from "../../api/Api";

const charDirection = ["moveU", "moveR", "moveD", "moveL", "dragon"];

function Board(props) {
  const { rows, cols, setScore, players = [], myPlayer } = props;
  const boardRef = useRef(null);
  const [board, setBoard] = useState(() => {
    return generateRandomBoard(rows, cols);
  });
  const [activeRow, setActiveRow] = useState(() => 0);
  const [activeCol, setActiveCol] = useState(() => 0);
  const [alignment, setAlignment] = useState(() => 2);
  const [vector, setVector] = useState(() => 0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleMovement = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    console.log("##handleMovement", alignment, vector, activeRow, activeCol);
    const interval = setInterval(() => {
      setVector((prevIndex) => (prevIndex + 1) % 4);
    }, 200);

    setTimeout(() => {
      clearInterval(interval);
      setVector(0);
      setIsTransitioning(false);
    }, 800);
  };

  const setPosition = (prev, newV, dir) => {
    console.log("##P", dir, prev, "=>", newV);
    const isRow = dir === 0 || dir === 2;
    const limit = isRow ? rows : cols;
    if (newV < 0 || newV >= limit) return prev;
    const type = isRow
      ? board[newV][activeCol].type
      : board[activeRow][newV].type;

    if (type === TILE_TYPES.ROCK) return prev;
    else if (type === TILE_TYPES.WATER) setAlignment(4);
    else setAlignment(dir);
    handleMovement();
    return newV;
  };

  const handleKeyDown = (event) => {
    console.log("##keydown", event.key);
    switch (event.key) {
      case "ArrowUp":
        setActiveRow((prevRow) => {
          let newRow = prevRow - 1;
          console.log("##up", prevRow, newRow);
          return setPosition(prevRow, newRow, 0);
        });
        break;
      case "ArrowRight":
        setActiveCol((prevCol) => {
          let newCol = prevCol + 1;
          console.log("##right", prevCol, newCol);
          // setVector(1);
          return setPosition(prevCol, newCol, 1);
        });
        break;
      case "ArrowDown":
        setActiveRow((prevRow) => {
          let newRow = prevRow + 1;
          console.log("##down", prevRow, newRow);
          return setPosition(prevRow, newRow, 2);
        });
        break;
      case "ArrowLeft":
        setActiveCol((prevCol) => {
          let newCol = prevCol - 1;
          console.log("##left", prevCol, newCol);
          return setPosition(prevCol, newCol, 3);
        });
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
    if (board[activeRow][activeCol].type === TILE_TYPES.FOOD) {
      setTimeout(() => {
        let temp = board;
        temp[activeRow][activeCol].type = TILE_TYPES.EMPTY;
        setBoard(temp);
        setScore((prevScore) => prevScore + 1);
      }, 400);
    }
    updateData(myPlayer?.id, activeRow, activeCol);
  }, [activeRow, activeCol]);

  useEffect(() => {
    if (boardRef) {
      boardRef?.current?.focus();
    }
  }, []);

  console.log("##players", myPlayer, "|", players);

  return (
    <div tabIndex="0" onKeyDown={handleKeyDown} ref={boardRef}>
      <div className={styles.board}>
        <div
          className={`${styles.mycharacter} ${
            styles[charDirection[alignment]]
          }`}
          style={{
            transform: `translate(${activeCol * 6}rem, ${activeRow * 6}rem)`,
            backgroundPosition: `${vector * -44}px 0`,
          }}
        />
        {players?.map((p) => {
          return (
            <div
              className={` ${styles.char} ${styles.walkRight}`}
              style={{
                transform: `translate(${p?.x * 6}rem, ${p?.y * 6}rem)`,
              }}
              key={p.id}
            />
          );
        })}
        {board.map((row, rowIndex) => {
          return (
            <div key={rowIndex} className={styles.row}>
              {row.map((col, colIndex) => {
                const isActive =
                  activeRow === rowIndex && activeCol === colIndex;
                return <Tile key={colIndex} isActive={isActive} tile={col} />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Board;

Board.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  players: PropTypes.array,
  myPlayer: PropTypes.object,
};
