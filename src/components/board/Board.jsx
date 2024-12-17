import { useMemo, useState } from "react";
import Tile from "../tile";
import styles from "./Board.module.css";
import PropTypes from "prop-types";
import { TILE_TYPES } from "../../utils/constants";
import { generateRandomBoard } from "../../utils/helper";

function Board(props) {
  const { rows, cols } = props;
  const [board] = useState(() => {
    return generateRandomBoard(rows, cols);
  });
  const [activeRow, setActiveRow] = useState(0);
  const [activeCol, setActiveCol] = useState(0);
  const [rotation, setRotation] = useState(0);

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowUp":
        setRotation(0);
        setActiveRow((prevRow) => {
          let newRow = (prevRow - 1 + rows) % rows;
          if (board[newRow][activeCol].type === TILE_TYPES.ROCK) {
            return prevRow;
          }
          return newRow;
        });
        break;
      case "ArrowDown":
        setRotation(180);
        setActiveRow((prevRow) => {
          let newRow = (prevRow + 1) % rows;
          if (board[newRow][activeCol].type === TILE_TYPES.ROCK) {
            return prevRow;
          }
          return newRow;
        });
        break;
      case "ArrowLeft":
        setRotation(270);
        setActiveCol((prevCol) => {
          let newCol = (prevCol - 1 + cols) % cols;
          if (board[activeRow][newCol].type === TILE_TYPES.ROCK) {
            return prevCol;
          }
          return newCol;
        });
        break;
      case "ArrowRight":
        setRotation(90);
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

  let dir = useMemo(() => {
    if (rotation === 90) return -1;
    if (rotation === 270) return 1;
    return -1;
  }, [rotation]);

  return (
    <div tabIndex="0" onKeyDown={handleKeyDown} autoFocus>
      <div className={styles.board}>
        <div
          className={styles.mycharacter}
          style={{
            transform: `translate(${activeCol * 6}rem, ${
              activeRow * 6
            }rem) scaleX(${dir})`,
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
