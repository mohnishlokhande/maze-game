import PropTypes from "prop-types";
import styles from "./Editor.module.css";
import { useRef, useState } from "react";
import { updateData } from "../../api/Api";

export default function Editor(props) {
  const { id, boardRef, isTyping, msg, setIsTyping, setMsg } = props;

  const textareaRef = useRef(null);
  const [rows, setRows] = useState(2);
  const handleKeyPress = (e) => {
    console.log("##handleKeyPress", e.key);
    if (e.key === "Enter" && !e.shiftKey && msg?.trim().length > 0) {
      e.preventDefault();
      updateData(id, { isTyping: false, msg: msg });
      setIsTyping(false);
      setMsg("");
      setRows(2);
      boardRef?.current?.focus();
    } else if (e.key === "Enter" && e.shiftKey && rows < 16) {
      setRows((prev) => prev + 1);
    } else if (e.key === "Backspace" && rows > 2) {
      setRows((prev) => prev - 1);
    } else if (e.key === "Escape") {
      setIsTyping(false);
      setMsg("");
      updateData(id, { isTyping: false });
      boardRef?.current?.focus();
    }
  };

  if (!isTyping) return;
  return (
    <div className={styles.editor}>
      <textarea
        ref={textareaRef}
        value={msg}
        autoFocus
        className={styles.input}
        placeholder="Type your message..."
        onChange={(e) => {
          console.log("##onChange", e.target.value, e.target.value?.length);
          setMsg(e.target.value);
        }}
        onKeyUp={handleKeyPress}
        rows={rows.toString()}
      ></textarea>
    </div>
  );
}

Editor.propTypes = {
  id: PropTypes.string,
  boardRef: PropTypes.object,
  isTyping: PropTypes.bool,
  setIsTyping: PropTypes.func,
  setMsg: PropTypes.func,
  msg: PropTypes.string,
};
