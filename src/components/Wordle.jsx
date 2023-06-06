import { useEffect, useState } from 'react';
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keyboard from './Keyboard';
import Modal from './Modal';

const Wordle = ({ answer }) => {
  const { handleKeyup, currentGuess, turn, formattedGuesses, guessIsCorrect, usedKeys } = useWordle(answer);

  const [showModal, setShowModal] = useState(false);

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

  // create modal for end of game
  // animate model

  // create keyboard functionality

  return (
    <>
      <h1>Wordle</h1>
      <p>Answer: {answer} / Turn: {turn}</p>
      <p>Guess: {currentGuess}</p>

      <Grid
        formattedGuesses={formattedGuesses}
        currentGuess={currentGuess}
        turn={turn}
      />
      <Keyboard
        usedKeys={usedKeys}
      />
      {showModal &&
        <Modal
          guessIsCorrect={guessIsCorrect}
          turn={turn}
          answer={answer}
        />}
    </>
  );
};

export default Wordle;