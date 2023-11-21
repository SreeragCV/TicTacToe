import React from "react";

export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>GAME OVER!!</h2>
      {winner && <p>{winner} WON</p>}
      {!winner && <p>DRAW!!</p>}
      <p>
        <button onClick={onRestart}>
            REMATCH!
        </button>
      </p>
    </div>
  );
}
