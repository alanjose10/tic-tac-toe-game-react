import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Logs from "./components/Logs";
import GameOver from "./components/GameOver";

import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameState = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

const getActivePlayer = (gamePlays) => {
  if (gamePlays.length > 0 && gamePlays[0].character === 'X'){
    return 'O';
  }
  return 'X';
}

function App() {

  let winner = null;

  const [gamePlays, setGamePlays] = useState([]);

  const nextSymbol = getActivePlayer(gamePlays);

  const gameState = [...initialGameState.map(row => [...row])];
  if (gamePlays.length !== 0){
    for (const play of gamePlays) {
      gameState[play.square.row][play.square.col] = play.character
    }
  }
  

  for (const combination of WINNING_COMBINATIONS){
    const squareOne = gameState[combination[0].row][[combination[0].column]];
    const squareTwo = gameState[combination[1].row][[combination[1].column]];
    const squareThree = gameState[combination[2].row][[combination[2].column]];

    if (squareOne !== null && squareTwo !== null && squareThree != null){
      if (squareOne === squareTwo && squareTwo === squareThree) {
        winner = squareOne;
      }
    }
  }

  const handlePlay = (rowIndex, colIndex) => {
    if (winner) {
      return
    }

    setGamePlays(
      (prevState) => {
        const nextSymbol = getActivePlayer(prevState);
        const currentPlay = {
          square: { row: rowIndex, col: colIndex },
          character: nextSymbol
        };
        return [currentPlay, ...prevState];
      }
    )
  }

  const handleRematch = () => {
    console.log('Rematching')
    setGamePlays([]);
  }

  const renderGameOver = () => {
    if (winner !== null || gamePlays.length == 9) {
      return <GameOver winner={winner} onRematch={handleRematch}></GameOver>;
    }
    return null;
  }

  

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" hasTurn={nextSymbol === 'X'}/>
          <Player initialName="Player 2" symbol="O" hasTurn={nextSymbol === 'O'}/>
        </ol>
        {renderGameOver()}
        <GameBoard gameState={gameState} onPlay={handlePlay}/>
      </div>
      <Logs gamePlays={gamePlays}></Logs>
    </main>
  );
}

export default App
