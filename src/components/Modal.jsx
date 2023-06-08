const Modal = ({ guessIsCorrect, turn, answer, resetGame, setShowModal }) => {

    const handlePlayAgain = () => {
        resetGame();
        setShowModal(false);
    };
    return (
        <div className='modal'>
            {guessIsCorrect ?
                <div>
                    <h2>Congratulations!</h2>
                    <p>You guessed <span>{answer}</span> in {turn} turn(s)</p>
                    <p>Nice job, I'll win next time!</p>
                    <button onClick={() => handlePlayAgain()}>PLAY AGAIN</button>
                </div>
                :
                <div>
                    <h2>Unlucky!</h2>
                    <p>The answer was <span>{answer}</span></p>
                    <p>How about another?</p>
                    <button onClick={() => handlePlayAgain()}>PLAY AGAIN</button>
                </div>
            }
        </div>
    );
};

export default Modal;