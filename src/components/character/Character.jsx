import { charDirection } from "../../utils/constants";
import styles from "./Character.module.css";
import PropTypes from "prop-types";

export default function Character(props) {
  const { p, site = "" } = props;

  if (p?.page !== site) return null;
  return (
    <div style={{ position: "relative" }}>
      <div
        className={`${styles.mycharacter} ${styles[charDirection[p?.dir]]}`}
        style={{
          transform: `translate(${p?.x * 4}rem, ${p?.y * 4}rem)`,
          backgroundPosition: `${p?.vector * -24}px 0`,
        }}
      />
      <div
        className={styles.name}
        style={{
          transform: `translate(${p?.x * 4}rem, ${p?.y * 4}rem)`,
        }}
      >
        {p.name} {site === "forest" && p.score}
      </div>
      {p?.msg && (
        <div
          className={styles.msgContainer}
          style={{
            transform: `translate(${p?.x * 4}rem, ${p?.y * 4}rem)`,
          }}
        >
          <div className={styles.msg}>{p.msg}</div>
        </div>
      )}
    </div>
  );
}

Character.propTypes = {
  p: PropTypes.object,
  site: PropTypes.string,
};
