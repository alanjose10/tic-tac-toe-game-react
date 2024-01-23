import { useState } from "react";

const initialGameState = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

const GameBoard = () => {

    const [gameState, setGameState] = useState(initialGameState);

    const [char, setChar] = useState('X');


    const handleBoxClick = (rowIndex, colIndex) => {

        setGameState(
            (prevState) => {
                const newState = [...prevState.map(inner => [...inner])];
                newState[rowIndex][colIndex] = char;
                return newState;
            }
        );
        setChar((prevState) => (prevState === 'X') ? 'O' : 'X')
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