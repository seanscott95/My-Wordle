import { useEffect, useState } from 'react';
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keyboard from './Keyboard';
import Modal from './Modal';

const Wordle = ({ answer, generateRandomWord }) => {
  const [theme, setTheme] = useState('light');
  const [endOfGame, setEndOfGame] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { handleKeyup, currentGuess, turn, formattedGuesses, guessIsCorrect, usedKeys, resetGame } = useWordle(answer, setEndOfGame);


  const toggleTheme = () => {
    setTheme((prev) => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyup);

    if (guessIsCorrect && !endOfGame) {
      // Delays the modal appearing so the user can look at last guess
      setTimeout(() => {
        setShowModal(true);
        setEndOfGame(true);
      }, 2000);
      document.removeEventListener('keyup', handleKeyup);
    };
    if (!guessIsCorrect && turn === 6 && !endOfGame) {
      setTimeout(() => {
        setShowModal(true);
        setEndOfGame(true);
        document.removeEventListener('keyup', handleKeyup);
      }, 2000);
    };

    return () => {
      document.removeEventListener('keyup', handleKeyup);
    };
  }, [handleKeyup, guessIsCorrect, turn]);
  console.log('modal', showModal)

  return (
    <div className={theme}>
      <div className='btnGroup'>
        <label className="switch">
          <input type="checkbox" onClick={toggleTheme} />
          <span className="slider round"></span>
        </label>
        <p>{theme}</p>
      </div>

      <h1>My Wordle</h1>
      <Grid
        formattedGuesses={formattedGuesses}
        currentGuess={currentGuess}
        turn={turn}
      />
      <Keyboard
        usedKeys={usedKeys}
        handleKeyup={handleKeyup}
      />
      {showModal &&
        <Modal
          guessIsCorrect={guessIsCorrect}
          turn={turn}
          answer={answer}
          resetGame={resetGame}
          setShowModal={setShowModal}
          generateRandomWord={generateRandomWord}
          setEndOfGame={setEndOfGame}
        />}
    </div>
  );
};

export default Wordle;