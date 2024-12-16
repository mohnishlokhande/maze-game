import styles from "./Tile.module.css";
import PropTypes from "prop-types";

function Tile(props) {
  const { isActive = false } = props;

  return (
    <div className={styles.tile}>
      {isActive && <div className={styles.active}></div>}
    </div>
  );
}

export default Tile;
Tile.propTypes = {
  isActive: PropTypes.bool,
};
