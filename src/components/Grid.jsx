import Row from "./Row";

const Grid = ({ formattedGuesses, currentGuess, turn }) => {
    return (
        <>
            {formattedGuesses.map((item, i) => {
                if (turn === i) {
                    return <Row key={i} currentGuess={currentGuess} />
                };
                return <Row
                    guess={item}
                    turn={turn}
                    key={i}
                />
            })}
        </>
    );
};

export default Grid;