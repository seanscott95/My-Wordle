import { useEffect } from 'react';
import useWordle from '../hooks/useWordle';

const Wordle = ({ answer }) => {
  const { handleKeyup, currentGuess } = useWordle(answer);

  useEffect(() => {
    document.addEventListener('keyup', handleKeyup);

    return () => {
      document.removeEventListener('keyup', handleKeyup);
    };
  }, [handleKeyup]);
  console.log(currentGuess)
  
  return (
    <>
      <h1>Answer: {answer}</h1>
      <h1>Guess: {currentGuess}</h1>
      <div>Wordle</div>
    </>
  );
};

export default Wordle;