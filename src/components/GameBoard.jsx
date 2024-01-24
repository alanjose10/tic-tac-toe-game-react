import { useState } from "react";

const initialGameState = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

const GameBoard = ({gamePlays, onPlay}) => {

    const gameState = initialGameState;

    for (const play of gamePlays) {
        gameState[play.square.row][play.square.col] = play.character
    }

    const handleClick = (rowIndex, colIndex) => {
        if (gameState[rowIndex][colIndex] !== null){
            return
        }
        onPlay(rowIndex, colIndex);
    }

    return (
        <ol id="game-board">
            {gameState.map(
                (row, rowIndex) => (
                    <li key={rowIndex} className="grid-item">
                        <ol>
                            {row.map(
                                (symbol, colIndex) => (
                                    <li key={colIndex} className="grid-item"><button className="grid-button" onClick={() => handleClick(rowIndex, colIndex)}>{symbol}</button></li>
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