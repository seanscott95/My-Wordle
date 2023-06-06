import { useEffect } from 'react';
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keyboard from './Keyboard';

const Wordle = ({ answer }) => {
  const { handleKeyup, currentGuess, turn, formattedGuesses, guessIsCorrect, usedKeys } = useWordle(answer);

  useEffect(() => {
    document.addEventListener('keyup', handleKeyup);

    return () => {
      document.removeEventListener('keyup', handleKeyup);
    };
  }, [handleKeyup]);

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
    </>
  );
};

export default Wordle;