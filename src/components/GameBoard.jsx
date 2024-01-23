import { useState } from "react";

const initialGameState = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

const GameBoard = ({character, onPlayHandler}) => {

    const [gameState, setGameState] = useState(initialGameState);



    const handleBoxClick = (rowIndex, colIndex) => {

        setGameState(
            (prevState) => {
                const newState = [...prevState.map(inner => [...inner])];
                newState[rowIndex][colIndex] = character;
                return newState;
            }
        );
        onPlayHandler();
    }

    return (
        <ol id="game-board">
            {gameState.map(
                (row, rowIndex) => (
                    <li key={rowIndex} className="grid-item">
                        <ol>
                            {row.map(
                                (symbol, colIndex) => (
                                    <li key={colIndex} className="grid-item"><button className="grid-button" onClick={() => handleBoxClick(rowIndex, colIndex)}>{symbol}</button></li>
                                )
                            )}
                        </ol>
                    </li>
                )
            )}
        </ol>
    );
}

export default GameBoard;