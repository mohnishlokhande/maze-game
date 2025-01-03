import { useEffect, useRef, useState } from "react";
import Tile from "../tile";
import styles from "../board/Board.module.css";
import PropTypes from "prop-types";
import { TILE_TYPES } from "../../utils/constants";
import Character from "../character";
import {
  useEditorStore,
  useMyPlayerStore,
  usePlayersStore,
} from "../../store/playerStates";
import { handleKeyDownEvents } from "../../utils/helper";

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
      {players?.map((p) => {
        return <Character key={p.id} p={p} site="freeway" />;
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
