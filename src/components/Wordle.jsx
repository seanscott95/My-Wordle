import { useEffect } from 'react';
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keyboard from './Keyboard';

const Wordle = ({ answer }) => {
  const { handleKeyup, currentGuess, guessHistory, turn, formattedGuesses, guessIsCorrect } = useWordle(answer);

  useEffect(() => {
    document.addEventListener('keyup', handleKeyup);

    return () => {
      document.removeEventListener('keyup', handleKeyup);
    };
  }, [handleKeyup]);

  // create modal for end of game
  // animate model

  // create keyboard
  // create keyboard functionality
  // add css color to keys

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
      <Keyboard />
    </>
  );
};

export default Wordle;