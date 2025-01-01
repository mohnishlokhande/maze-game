import { useEffect, useState } from "react";
import Tile from "../tile";
import styles from "../board/Board.module.css";
import PropTypes from "prop-types";
import { TILE_TYPES } from "../../utils/constants";
import Character from "../character";

function FreeWay(props) {
  const { rows, cols, myPlayer, players } = props;
  const [board] = useState(() => {
    let grid = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < cols; j++) {
        row.push({
          isActive: false,
          type: TILE_TYPES.EMPTY,
        });
      }
      grid.push(row);
    }
    return grid;
  });
  const [position, setPosition] = useState({ row: 0, col: 0 });
  const [rotation, setRotation] = useState(0);
  const [activeKeys, setActiveKeys] = useState(new Set());

  //   const handleKeyDown = (event) => {
  //     console.log("keydown", event.key);
  //     switch (event.key) {
  //       case "ArrowUp":
  //         setRotation(0);
  //         setActiveRow((prevRow) => {
  //           let newRow = (prevRow - 1 + rows) % rows;
  //           if (board[newRow][activeCol].type === TILE_TYPES.ROCK) {
  //             return prevRow;
  //           }
  //           return newRow;
  //         });
  //         break;
  //       case "ArrowDown":
  //         setRotation(180);
  //         setActiveRow((prevRow) => {
  //           let newRow = (prevRow + 1) % rows;
  //           if (board[newRow][activeCol].type === TILE_TYPES.ROCK) {
  //             return prevRow;
  //           }
  //           return newRow;
  //         });
  //         break;
  //       case "ArrowLeft":
  //         setRotation(270);
  //         setActiveCol((prevCol) => {
  //           let newCol = (prevCol - 1 + cols) % cols;
  //           if (board[activeRow][newCol].type === TILE_TYPES.ROCK) {
  //             return prevCol;
  //           }
  //           return newCol;
  //         });
  //         break;
  //       case "ArrowRight":
  //         setRotation(90);
  //         setActiveCol((prevCol) => {
  //           let newCol = (prevCol + 1) % cols;
  //           if (board[activeRow][newCol].type === TILE_TYPES.ROCK) {
  //             return prevCol;
  //           }
  //           return newCol;
  //         });
  //         break;
  //       case " ":
  //         break;
  //       case "Enter":
  //         break;
  //       case "Escape":
  //         break;
  //       default:
  //         break;
  //     }
  //   };

  const handleKeyDown = (e) => {
    setActiveKeys((prev) => new Set(prev).add(e.key));
  };

  const handleKeyUp = (e) => {
    setActiveKeys((prev) => {
      const newKeys = new Set(prev);
      newKeys.delete(e.key);
      return newKeys;
    });
  };

  useEffect(() => {
    const updateMovement = () => {
      console.log("#####ctiveKeys", activeKeys);
      setPosition((prev) => {
        let { row, col } = prev;

        if (activeKeys.has("ArrowLeft")) {
          col = Math.max(0, col - 1);
          setRotation(270); // Rotate left
        }
        if (activeKeys.has("ArrowRight")) {
          col = Math.min(cols - 1, col + 1);
          setRotation(90); // Rotate right
        }
        if (activeKeys.has("ArrowUp")) {
          row = Math.max(0, row - 1);
          setRotation(0); // Rotate upward
        }
        if (activeKeys.has("ArrowDown")) {
          row = Math.min(rows - 1, row + 1);
          setRotation(180); // Rotate downward
        }

        return { row, col };
      });
    };

    if (activeKeys.size > 0) {
      const interval = setInterval(updateMovement, 100); // Adjust delay for responsiveness
      return () => clearInterval(interval);
    }
  }, [activeKeys]);

  //   console.log("position", activeKeys);

  //   let dir = useMemo(() => {
  //     if (rotation === 90) return -1;
  //     if (rotation === 270) return 1;
  //     return -1;
  //   }, [rotation]);

  console.log("position", players);

  return (
    <div tabIndex="0" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
      <div className={styles.board}>
        {/* <div
          className={styles.mycharacter}
          style={{
            transform: `translate(${position.col * 6}rem, ${
              position.row * 6
            }rem)`,
          }}
        /> */}
        {players?.map((p) => {
          return <Character key={p.id} p={p} site="freeway" />;
        })}
        {board.map((row, rowIndex) => {
          return (
            <div key={rowIndex} className={styles.row}>
              {row.map((col, colIndex) => {
                const isActive =
                  position.row === rowIndex && position.col === colIndex;
                return (
                  <Tile
                    key={colIndex}
                    isActive={isActive}
                    tile={col}
                    site="freeway"
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FreeWay;

FreeWay.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  players: PropTypes.array,
  myPlayer: PropTypes.object,
};
