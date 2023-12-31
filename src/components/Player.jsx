import React, { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChange }) {
  
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleClick = () => {
    setIsEditing(editing => !editing);
    
    if(isEditing){
      onChange(symbol, playerName)
    }
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let clickedButton = "Edit";

  if (isEditing) {
    editablePlayerName = <input type="text" value={playerName} onChange={handleChange} required />;
    clickedButton = "Save";
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{clickedButton}</button>
    </li>
  );
}
