import { useState } from "react";
import Tile from "../tile";
import styles from "./Board.module.css";
import PropTypes from "prop-types";
import { TILE_TYPES } from "../../utils/constants";
import { generateRandomBoard } from "../../utils/helper";

const charDirection = ["moveU", "moveR", "moveD", "moveL", "dragon"];

function Board(props) {
  const { rows, cols } = props;
  const [board] = useState(() => {
    return generateRandomBoard(rows, cols);
  });
  const [activeRow, setActiveRow] = useState(0);
  const [activeCol, setActiveCol] = useState(0);
  const [dir, setDir] = useState(2);
  const [vector, setVector] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleMovement = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const interval = setInterval(() => {
      setVector((prevIndex) => (prevIndex + 1) % 4);
    }, 150);

    setTimeout(() => {
      clearInterval(interval);
      setVector(0);
      setIsTransitioning(false);
    }, 600);
  };

  const arrowKeys = () => {
    handleMovement();
  };

  const handleKeyDown = (event) => {
    console.log("keydown", event.key);
    switch (event.key) {
      case "ArrowUp":
        arrowKeys();
        setDir(0);
        setActiveRow((prevRow) => {
          let newRow = (prevRow - 1 + rows) % rows;
          if (board[newRow][activeCol].type === TILE_TYPES.ROCK) {
            return prevRow;
          } else if (board[newRow][activeCol].type === TILE_TYPES.WATER) {
            setDir(4);
          }
          return newRow;
        });
        break;
      case "ArrowDown":
        arrowKeys();
        setDir(2);
        setActiveRow((prevRow) => {
          let newRow = (prevRow + 1) % rows;
          if (board[newRow][activeCol].type === TILE_TYPES.ROCK) {
            return prevRow;
          }
          return newRow;
        });
        break;
      case "ArrowLeft":
        arrowKeys();
        setDir(3);
        setActiveCol((prevCol) => {
          let newCol = (prevCol - 1 + cols) % cols;
          if (board[activeRow][newCol].type === TILE_TYPES.ROCK) {
            return prevCol;
          }
          return newCol;
        });
        break;
      case "ArrowRight":
        arrowKeys();
        setDir(1);
        setActiveCol((prevCol) => {
          let newCol = (prevCol + 1) % cols;
          if (board[activeRow][newCol].type === TILE_TYPES.ROCK) {
            return prevCol;
          }
          return newCol;
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

  return (
    <div tabIndex="0" onKeyDown={handleKeyDown}>
      <div className={styles.board}>
        <div
          className={`${styles.mycharacter} ${styles[charDirection[dir]]}`}
          style={{
            transform: `translate(${activeCol * 6}rem, ${activeRow * 6}rem)`,
            backgroundPosition: `${vector * -44}px 0`,
          }}
        />

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
};
