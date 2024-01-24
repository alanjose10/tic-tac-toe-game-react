import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Logs from "./components/Logs";

function App() {

  const [playingSymbol, setPlayingSymbol] = useState('X');
  const [gamePlays, setGamePlays] = useState([]);

  const handlePlay = (rowIndex, colIndex) => {
    setPlayingSymbol(prevState => prevState === 'X' ? 'O': 'X');

    setGamePlays(
      (prevState) => {

        let currentSymbol = 'X';
        if (prevState.length > 0 && prevState[0].character === 'X') {
          currentSymbol = 'O';
        }

        const currentPlay = {
          square: { row: rowIndex, col: colIndex },
          character: currentSymbol
        };
        return [currentPlay, ...prevState];
      }
    )

  } 

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Alan" symbol="X" hasTurn={playingSymbol === 'X'}/>
          <Player initialName="Jose" symbol="O" hasTurn={playingSymbol === 'O'}/>
        </ol>
        <GameBoard gamePlays={gamePlays} onPlay={handlePlay}/>
      </div>
      <Logs gamePlays={gamePlays}></Logs>
    </main>
  );
}

export default App
