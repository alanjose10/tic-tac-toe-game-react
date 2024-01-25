import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Logs from "./components/Logs";
import GameOver from "./components/GameOver";

import { WINNING_COMBINATIONS } from "./winning-combinations";

const STARTING_GAME_STATE = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

const INITIAL_PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

const getActivePlayer = (gamePlays) => {
  if (gamePlays.length > 0 && gamePlays[0].character === 'X') {
    return 'O';
  }
  return 'X';
}

function findWinner(gameState, players) {
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const squareOne = gameState[combination[0].row][[combination[0].column]];
    const squareTwo = gameState[combination[1].row][[combination[1].column]];
    const squareThree = gameState[combination[2].row][[combination[2].column]];
    
    if (squareOne !== null && squareTwo !== null && squareThree != null) {
      if (squareOne === squareTwo && squareTwo === squareThree) {
        winner = players[squareOne];
        break;
      }
    }
  }
  return winner;
}

function deriveGameState(gamePlays) {
  const gameState = [...STARTING_GAME_STATE.map(row => [...row])];
  if (gamePlays.length !== 0) {
    for (const play of gamePlays) {
      gameState[play.square.row][play.square.col] = play.character
    }
  }
  return gameState;
}

function App() {

  const [gamePlays, setGamePlays] = useState([]);
  const [players, setPlayers] = useState(INITIAL_PLAYERS);

  const nextSymbol = getActivePlayer(gamePlays);
  const gameState = deriveGameState(gamePlays);
  const winner = findWinner(gameState, players);

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
    setGamePlays([]);
  }

  const renderGameOver = () => {
    if (winner !== null || gamePlays.length == 9) {
      return <GameOver winner={winner} onRematch={handleRematch} players={players}></GameOver>;
    }
    return null;
  }

  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers((prevState) => ({ ...prevState, [symbol]: newName }));
  }



  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={INITIAL_PLAYERS.X} symbol="X" hasTurn={nextSymbol === 'X'} onNameChange={handlePlayerNameChange} />
          <Player initialName={INITIAL_PLAYERS.O} symbol="O" hasTurn={nextSymbol === 'O'} onNameChange={handlePlayerNameChange} />
        </ol>
        {renderGameOver()}
        <GameBoard gameState={gameState} onPlay={handlePlay} />
      </div>
      <Logs gamePlays={gamePlays} players={players}></Logs>
    </main>
  );
}

export default App
