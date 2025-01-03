import { TILE_TYPES } from "../../utils/constants";
import styles from "./Tile.module.css";
import PropTypes from "prop-types";

function Tile(props) {
  // eslint-disable-next-line no-unused-vars
  const { isActive = false, type = "empty", site = "home" } = props;

  const content = {
    [TILE_TYPES.GRASS]: site === "home" ? "" : "☘️",
    [TILE_TYPES.WATER]: "",
    [TILE_TYPES.ROCK]: "⛰️",
    [TILE_TYPES.EMPTY]: "",
    [TILE_TYPES.FOOD]: "🍎",
    [TILE_TYPES.GAME]: "🌳",
    [TILE_TYPES.SELL_APPLE]: "💰",
    [TILE_TYPES.FREE_WAY]: "🚦",
    [TILE_TYPES.HOME]: "🏠",
  };

  return (
    <div className={`${styles.tile} ${styles[type]}`}>{content[type]}</div>
  );
}

export default Tile;
Tile.propTypes = {
  isActive: PropTypes.bool,
  type: PropTypes.string,
  site: PropTypes.string,
};
