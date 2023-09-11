import { useState } from "react";

//add
export default function Team() {
  const [player, setPlayer] = useState(11);
  const addHandle = () => {
    const addPlayer = player + 1;
    setPlayer(addPlayer);
  };

  //remove
  const removePlayer = () => {
    setPlayer(player - 1);
  };

  const teamStyle = {
    border: "2px solid blue",
    borderRadius: "10px",
  };

  return (
    <div style={teamStyle}>
      <h3>Team :{player}</h3>
      <button onClick={addHandle}>Add</button>
      <button onClick={removePlayer}>Remove</button>
    </div>
  );
}
