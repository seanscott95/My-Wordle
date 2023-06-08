import { useEffect, useState } from 'react';
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keyboard from './Keyboard';
import Modal from './Modal';

const Wordle = ({ answer }) => {
  const { handleKeyup, currentGuess, turn, formattedGuesses, guessIsCorrect, usedKeys, resetGame } = useWordle(answer);

  const [showModal, setShowModal] = useState(false);

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyup);

    if (guessIsCorrect) {
      // Delays the modal appearing so the user can look at last guess
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
      document.removeEventListener('keyup', handleKeyup);
    };
    if (!guessIsCorrect && turn > 5) {
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
      document.removeEventListener('keyup', handleKeyup);
    };

    return () => {
      document.removeEventListener('keyup', handleKeyup);
    };
  }, [handleKeyup, guessIsCorrect, turn]);

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
        />}
    </div>
  );
};

export default Wordle;