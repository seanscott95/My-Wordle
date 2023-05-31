import { useEffect } from 'react';
import useWordle from '../hooks/useWordle';

const Wordle = ({ answer }) => {
  const { handleKeyup, currentGuess, guessHistory, turn, formattedGuesses, guessIsCorrect } = useWordle(answer);

  useEffect(() => {
    document.addEventListener('keyup', handleKeyup);

    return () => {
      document.removeEventListener('keyup', handleKeyup);
    };
  }, [handleKeyup]);

  useEffect(() => {
    console.log(formattedGuesses, turn, guessIsCorrect)
  }, [formattedGuesses, turn, guessIsCorrect]);
  
  return (
    <>
      <h1>Answer: {answer}</h1>
      <h1>Guess: {currentGuess}</h1>
      <h1>History: {guessHistory}</h1>
      <h1>Turn: {turn}</h1>
      <div>Wordle</div>
    </>
  );
};

export default Wordle;