import { charDirection } from "../../utils/constants";
import styles from "./Character.module.css";
import PropTypes from "prop-types";

export default function Character(props) {
  const { p, site = "" } = props;

  if (p?.page !== site) return null;
  return (
    <div>
      <div
        className={`${styles.mycharacter} ${styles[charDirection[p?.dir]]}`}
        style={{
          transform: `translate(${p?.x * 6}rem, ${p?.y * 6}rem)`,
          backgroundPosition: `${p?.vector * -44}px 0`,
        }}
      />
      <div
        className={styles.name}
        style={{
          transform: `translate(${p?.x * 6}rem, ${p?.y * 6}rem)`,
        }}
      >
        {p.name} {site === "forest" && p.score}
      </div>
    </div>
  );
}

Character.propTypes = {
  p: PropTypes.object,
  site: PropTypes.string,
};
