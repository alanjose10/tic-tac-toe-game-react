import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Logs from "./components/Logs";

const getActivePlayer = (gamePlays) => {
  if (gamePlays.length > 0 && gamePlays[0].character === 'X'){
    return 'O';
  }
  return 'X';
}

function App() {

  const [gamePlays, setGamePlays] = useState([]);

  const nextSymbol = getActivePlayer(gamePlays);

  const handlePlay = (rowIndex, colIndex) => {

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

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Alan" symbol="X" hasTurn={nextSymbol === 'X'}/>
          <Player initialName="Jose" symbol="O" hasTurn={nextSymbol === 'O'}/>
        </ol>
        <GameBoard gamePlays={gamePlays} onPlay={handlePlay}/>
      </div>
      <Logs gamePlays={gamePlays}></Logs>
    </main>
  );
}

export default App
