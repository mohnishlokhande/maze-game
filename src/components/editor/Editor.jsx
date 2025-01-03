import PropTypes from "prop-types";
import styles from "./Editor.module.css";
import { useRef, useState } from "react";
import { updateData } from "../../api/Api";
import { useEditorStore, useMyPlayerStore } from "../../store/playerStates";

export default function Editor() {
  const {
    myPlayer: { id = "" },
  } = useMyPlayerStore();
  const { isTyping, setIsTyping, msg, setMsg } = useEditorStore();

  const textareaRef = useRef(null);
  const [rows, setRows] = useState(2);
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey && msg?.trim().length > 0) {
      e.preventDefault();
      updateData(id, { isTyping: false, msg: msg });
      setIsTyping(false);
      setMsg("");
      setRows(2);
    } else if (e.key === "Enter" && e.shiftKey && rows < 16) {
      setRows((prev) => prev + 1);
    } else if (e.key === "Backspace" && rows > 2) {
      setRows((prev) => prev - 1);
    } else if (e.key === "Escape") {
      setIsTyping(false);
      setMsg("");
      updateData(id, { isTyping: false });
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
};
