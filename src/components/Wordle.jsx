import { useEffect } from 'react';
import useWordle from '../hooks/useWordle';
import Grid from './Grid';

const Wordle = ({ answer }) => {
  const { handleKeyup, currentGuess, guessHistory, turn, formattedGuesses, guessIsCorrect } = useWordle(answer);

  useEffect(() => {
    document.addEventListener('keyup', handleKeyup);

    return () => {
      document.removeEventListener('keyup', handleKeyup);
    };
  }, [handleKeyup]);

  // create grid
  // apply current guess to first grid
  // apply formattedGuesses to grid, 6 grids minus by how many guesses
  // shows some empty grids when no guess is done
  // pressing enter
  //    animate grids when entering
  //    add css color to grids for different colors

  // create modal for end of game
  // animate model

  // create keyboard
  // create keyboard functionality
  // add css color to keys

  return (
    <>
      <h1>Answer: {answer}</h1>
      <h1>Guess: {currentGuess}</h1>
      <h1>History: {guessHistory}</h1>
      <h1>Turn: {turn}</h1>
      <div>Wordle</div>

      <Grid
        formattedGuesses={formattedGuesses}
        currentGuess={currentGuess}
      />
    </>
  );
};

export default Wordle;