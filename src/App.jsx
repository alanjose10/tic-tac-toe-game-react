import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {

  const [playingSymbol, setPlayingSymbol] = useState('X');

  const handleTurnSwitch = () => {
    setPlayingSymbol(prevState => prevState === 'X' ? 'O': 'X');
  } 

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Alan" symbol="X" hasTurn={playingSymbol === 'X'}/>
          <Player initialName="Jose" symbol="O" hasTurn={playingSymbol === 'O'}/>
        </ol>
        <GameBoard character={playingSymbol} onPlayHandler={handleTurnSwitch}/>
      </div>
      LOGS
    </main>
  );
}

export default App
