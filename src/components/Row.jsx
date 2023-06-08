const Row = ({ guess, currentGuess }) => {
    if (guess) {
        return (
            <div className="row past">
                {guess.map((item, i) => (
                    <div key={i} className={item.color}>{item.key}</div>

                ))}
            </div>
        );
    };

    if (currentGuess) {
        let letterArr = currentGuess.split('');
        return (
            <div className='row current'>
                {letterArr.map((item, i) => (
                    <div key={i} className='entered'>{item}</div>
                ))}
                {[...Array(5 - letterArr.length)].map((_, i) => (
                    <div key={i}></div>
                ))}
            </div>
        );
    };

    return (
        <>
            <div className="row">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    );
};

export default Row;