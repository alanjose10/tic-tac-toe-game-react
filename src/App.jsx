import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Alan" symbol="X"/>
          <Player initialName="Jose" symbol="O"/>
        </ol>
        <GameBoard/>
      </div>
      LOGS
    </main>
  );
}

export default App
