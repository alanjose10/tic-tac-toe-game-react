

const Logs = ({ gamePlays }) => {

    return (
        <ol id="logs">
            {gamePlays.map((play, index) => <li key={`${play.square.row}${play.square.col}`}>{play.character} selected row {play.square.row}, column {play.square.col}</li>)}
        </ol>
    );
}

export default Logs;
