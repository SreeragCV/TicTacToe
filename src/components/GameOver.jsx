import React from "react";

export default function GameOver({ winner }) {
  return (
    <div id="game-over">
      <h2>GAME OVER!!</h2>
      {winner && <p>{winner} WON</p>}
      {!winner && <p>DRAW!!</p>}
      <p>
        <button>
            REMATCH!
        </button>
      </p>
    </div>
  );
}
