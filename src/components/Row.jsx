const Row = ({ guess }) => {
    // take first guesses and display
    // fill in rows depending on the length
    //
    if (guess) {
        return (
            <div className="row past">
                {guess.map((item, i) => (
                    <div key={i} className={item.color}>{item.key.toUpperCase()}</div>
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