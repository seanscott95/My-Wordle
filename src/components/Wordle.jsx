import { useEffect } from 'react';
import useWordle from '../hooks/useWordle';

const Wordle = ({ answer }) => {
  const { handleKeyup, currentGuess, guessHistory } = useWordle(answer);

  useEffect(() => {
    document.addEventListener('keyup', handleKeyup);

    return () => {
      document.removeEventListener('keyup', handleKeyup);
    };
  }, [handleKeyup]);
  
  return (
    <>
      <h1>Answer: {answer}</h1>
      <h1>Guess: {currentGuess}</h1>
      <h1>History: {guessHistory}</h1>
      <div>Wordle</div>
    </>
  );
};

export default Wordle;