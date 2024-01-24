

const GameOver = ({winner, onRematch}) => {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{winner} has won!</p>}
            {!winner && <p>Game is a draw!</p>}
            <p>
                <button onClick={onRematch}>Rematch!</button>
            </p>
        </div>
    );
}

export default GameOver