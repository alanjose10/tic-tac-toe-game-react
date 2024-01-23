
import { useState } from "react";

const Player = ({ initialName, symbol, hasTurn }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    const handleButtonClick = () => {
        setIsEditing((prevState) => !prevState);
    }

    const handleInputChange = (e) => {
        console.log(e.target.value);
        setPlayerName(e.target.value);

    }

    let playerNameElement = <span className="player-name">{playerName}</span>;
    let buttonCaption = 'Edit';
    if (isEditing) {
        playerNameElement = <input placeholder="Enter name" onChange={handleInputChange} value={playerName}></input>;
        buttonCaption = 'Save';
    }

    return (
        <li className={hasTurn ? 'active' : undefined}>
            <span className="player" >
                {playerNameElement}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button id="player-button" onClick={handleButtonClick}>{buttonCaption}</button>
        </li>
    );
}

export default Player;