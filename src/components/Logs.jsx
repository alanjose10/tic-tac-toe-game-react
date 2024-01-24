

const Logs = ({ gamePlays }) => {

    return (
        <ol>
            {gamePlays.map((play, index) => <li key={index}>{`${play.square.row} ${play.square.col} ${play.character}`}</li>)}
        </ol>
    );
}

export default Logs;
