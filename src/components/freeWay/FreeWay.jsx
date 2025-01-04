import { useEffect, useRef, useState } from "react";
import Tile from "../tile";
import styles from "../board/Board.module.css";
import PropTypes from "prop-types";
import { TILE_TYPES } from "../../utils/constants";
import {
  useEditorStore,
  useMyPlayerStore,
  usePlayersStore,
} from "../../store/playerStates";
import { handleKeyDownEvents } from "../../utils/helper";
import Car from "../car";
import { updateData } from "../../api/Api";

function FreeWay(props) {
  const { rows, cols } = props;
  const boardRef = useRef(null);
  const { myPlayer, setPage } = useMyPlayerStore();
  const { players } = usePlayersStore();
  const { isTyping, setIsTyping } = useEditorStore();
  const [board] = useState(() => {
    let grid = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < cols; j++) {
        row.push(TILE_TYPES.NULL);
      }
      grid.push(row);
    }
    grid[0][0] = TILE_TYPES.HOME;
    return grid;
  });

  const typingCallback = () => {
    boardRef?.current?.blur();
    setIsTyping(true);
  };

  const handleKeyDown = (event) => {
    event.preventDefault();
    handleKeyDownEvents(
      myPlayer,
      event.key,
      event.shiftKey,
      setPage,
      typingCallback,
      players,
      board
    );
  };
  const changeColor = (e) => {
    updateData(myPlayer.id, { carColor: e.target.name });
  };

  useEffect(() => {
    if (!isTyping) {
      boardRef?.current?.focus();
    }
  }, [isTyping]);

  useEffect(() => {
    if (boardRef) {
      boardRef?.current?.focus();
    }
  }, []);

  return (
    <div
      tabIndex="0"
      onKeyDown={handleKeyDown}
      ref={boardRef}
      className={styles.board}
    >
      <div
        className={styles.row}
        style={{ columnGap: "1rem", padding: "1rem" }}
      >
        <div>Color:</div>
        <button onClick={changeColor} name="green" className="btn">
          Green
        </button>
        <button onClick={changeColor} name="red" className="btn">
          Red
        </button>
        <button onClick={changeColor} name="blue" className="btn">
          Blue
        </button>
      </div>
      {players?.map((p) => {
        return <Car key={p.id} p={p} site="freeway" />;
      })}
      {board.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className={styles.row}>
            {row.map((col, colIndex) => {
              return <Tile key={colIndex} type={col} site="freeway" />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default FreeWay;

FreeWay.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
};
