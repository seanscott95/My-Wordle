import Row from "./Row";

const Grid = ({ formattedGuesses, currentGuess }) => {
    return (
        <>
        {
            formattedGuesses.map((item, i) => {
                return <Row guess={item} key={i} />
            })
        }
            {/* {formattedGuesses ?
                formattedGuesses.map((item) => {
                    return <Row guess={item} />
                }) :
                <>
                    <Row />
                    <Row />
                    <Row />
                    <Row />
                    <Row />
                    <Row />
                </>

            } */}
        </>
    );
};

export default Grid;