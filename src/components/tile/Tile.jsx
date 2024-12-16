import styles from "./Tile.module.css";
import PropTypes from "prop-types";

function Tile(props) {
  // eslint-disable-next-line no-unused-vars
  const { isActive = false } = props;

  return <div className={`${styles.tile} ${styles.grass}`}></div>;
}

export default Tile;
Tile.propTypes = {
  isActive: PropTypes.bool,
};
