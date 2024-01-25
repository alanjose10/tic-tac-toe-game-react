

const Logs = ({ gamePlays, players }) => {

    return (
        <ol id="logs">
            {gamePlays.map((play, index) => <li key={`${play.square.row}${play.square.col}`}>{players[play.character]} selected row {play.square.row}, column {play.square.col}</li>)}
        </ol>
    );
}

export default Logs;
