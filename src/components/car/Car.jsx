import { useEffect, useState } from "react";
import styles from "./Car.module.css";
import PropTypes from "prop-types";

const angle = [180, 270, 0, 90];
export default function Car(props) {
  const { p, site = "" } = props;
  const [preDir, setPreAngle] = useState(p?.dir);
  const [myAngle, setMyAngle] = useState(angle[p?.dir]);

  useEffect(() => {
    let newDir = p?.dir;
    if (preDir === newDir) return;
    switch (preDir) {
      case 0:
        if (newDir === 1) {
          setMyAngle((pre) => pre + 90);
        } else if (newDir === 3) {
          setMyAngle((pre) => pre - 90);
        }
        break;
      case 1:
        if (newDir === 2) {
          setMyAngle((pre) => pre + 90);
        } else if (newDir === 0) {
          setMyAngle((pre) => pre - 90);
        }
        break;
      case 2:
        if (newDir === 3) {
          setMyAngle((pre) => pre + 90);
        } else if (newDir === 1) {
          setMyAngle((pre) => pre - 90);
        }
        break;
      case 3:
        if (newDir === 0) {
          setMyAngle((pre) => pre + 90);
        } else if (newDir === 2) {
          setMyAngle((pre) => pre - 90);
        }
        break;
      default:
        break;
    }
    setPreAngle(p?.dir);
  }, [p?.dir]);

  if (p?.page !== site) return null;
  return (
    <div style={{ position: "relative" }}>
      <div
        className={`${styles.car}`}
        data-color={p?.carColor || "red"}
        style={{
          transform: `translate(${p?.x * 2.5}rem, ${
            p?.y * 2.5
          }rem) rotateZ(${myAngle}deg)`,
        }}
      />
      <div
        className={styles.name}
        style={{
          transform: `translate(${p?.x * 2.5}rem, ${p?.y * 2.5}rem)`,
        }}
      >
        {p.name} {site === "forest" && p.score}
      </div>
      {(p?.msg?.trim()?.length !== 0 || p?.isTyping == true) && (
        <>
          <div
            style={{
              transform: `translate(${p?.x * 2.5}rem, ${p?.y * 2.5}rem)`,
            }}
            className={styles.msgContainer}
          >
            {p.isTyping && <span className={styles.typing}>.....</span>}
            <div className={styles.msg}>{p.msg}</div>
            <div className={styles.msgArrow} />
          </div>
        </>
      )}
    </div>
  );
}

Car.propTypes = {
  p: PropTypes.object,
  site: PropTypes.string,
};
