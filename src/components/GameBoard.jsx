import { useState } from "react";

//[0][0], [0][1], [0][2]
//[1][0], [1][1], [1][2]
//[2][0], [2][1], [2][2]

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare, activePlayerSymbol}) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleClick = (rowIndex, colIndex) => {
    setGameBoard((prevBoard) => {
      const updatedBoard = [...prevBoard.map(e => [...e])]
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    })
    onSelectSquare();
  }


  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <>
            <li key={rowIndex}>
              <ol>
                {row.map((playerSymbol, colIndex) => {
                  return (
                    <li key={colIndex}>
                      <button onClick={() => handleClick(rowIndex, colIndex)}>{playerSymbol}</button>
                      {console.log(playerSymbol)}
                    </li>
                  );
                })}
              </ol>
            </li>
          </>
        );
      })}
    </ol>
  );
}
