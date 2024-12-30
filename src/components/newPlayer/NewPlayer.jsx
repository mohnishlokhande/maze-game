import { useState } from "react";
import PropTypes from "prop-types";
import { writeData } from "../../api/Api";
import styles from "./NewPlayer.module.css";

function NewPlayer(props) {
  const { user, setNewPlayer } = props;
  const [name, setName] = useState("");
  const [selectedChar, setSelectedChar] = useState("male");

  const registerPlayer = () => {
    setNewPlayer(false);
    const player = { name: name, score: 0, x: 0, y: 0, character: "" };
    writeData(user?.id, player);
    // setupDisconnectHandler(user.uid);
  };

  const handleChange = (event) => {
    setSelectedChar(event.target.value);
  };

  return (
    <div className={styles.newPlayer}>
      <div>New player</div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <select value={selectedChar} onChange={handleChange}>
        <option value="male">Man</option>
        <option value="female">Women</option>
        <option value="snake">Snake</option>
      </select>
      <button className={styles.btnSubmit} onClick={registerPlayer}>
        Submit
      </button>
    </div>
  );
}

export default NewPlayer;

NewPlayer.propTypes = {
  user: PropTypes.object.isRequired,
  setNewPlayer: PropTypes.func.isRequired,
};
