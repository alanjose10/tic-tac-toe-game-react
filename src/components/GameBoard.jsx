import { useState } from "react";



const GameBoard = ({gameState, onPlay}) => {

    

    // const handleClick = (rowIndex, colIndex) => {
    //     if (gameState[rowIndex][colIndex] !== null){
    //         return
    //     }
    //     onPlay(rowIndex, colIndex);
    // }

    return (
        <ol id="game-board">
            {gameState.map(
                (row, rowIndex) => (
                    <li key={rowIndex} className="grid-item">
                        <ol>
                            {row.map(
                                (symbol, colIndex) => (
                                    <li key={colIndex} className="grid-item"><button className="grid-button" onClick={() => onPlay(rowIndex, colIndex)} disabled={(gameState[rowIndex][colIndex] !== null) ? true : false}>{symbol}</button></li>
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