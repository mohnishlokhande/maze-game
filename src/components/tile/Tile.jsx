import { TILE_TYPES } from "../../utils/constants";
import styles from "./Tile.module.css";
import PropTypes from "prop-types";

function Tile(props) {
  // eslint-disable-next-line no-unused-vars
  const { isActive = false, tile = {} } = props;
  const { type } = tile;
  const content = {
    [TILE_TYPES.GRASS]: "*",
    [TILE_TYPES.WATER]: "~",
    [TILE_TYPES.ROCK]: "||",
    [TILE_TYPES.EMPTY]: "",
    [TILE_TYPES.GAS_STATION]: "{}",
  };

  return (
    <div className={`${styles.tile} ${styles[type]}`}>{content[type]}</div>
  );
}

export default Tile;
Tile.propTypes = {
  isActive: PropTypes.bool,
  tile: PropTypes.object,
};
