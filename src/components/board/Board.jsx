import { useEffect, useState } from "react";
import Tile from "../tile";
import styles from "./Board.module.css";
import PropTypes from "prop-types";

function Board(props) {
  const { rows, cols } = props;
  //   const [board, setBoard] = useState(() => {});
  const [activeRow, setActiveRow] = useState(0);
  const [activeCol, setActiveCol] = useState(0);

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowUp":
        setActiveCol((prevCol) => (prevCol - 1 + cols) % cols);
        break;
      case "ArrowDown":
        setActiveCol((prevCol) => (prevCol + 1) % cols);

        break;
      case "ArrowLeft":
        setActiveRow((prevRow) => (prevRow - 1 + rows) % rows);

        break;
      case "ArrowRight":
        setActiveRow((prevRow) => (prevRow + 1) % rows);
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
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <div className={styles.board}>
        <div
          className={styles.image}
          style={{
            transform: `translate(${activeRow * 8}rem, ${activeCol * 8}rem)`,
          }}
        />
        {Array(cols)
          .fill()
          .map((_, colIndex) => {
            return (
              <div key={colIndex} className={styles.row}>
                {Array(rows)
                  .fill()
                  .map((_, rowIndex) => {
                    const isActive =
                      activeRow === rowIndex && activeCol === colIndex;
                    return <Tile key={rowIndex} isActive={isActive} />;
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
