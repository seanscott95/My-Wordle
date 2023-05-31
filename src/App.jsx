import { useEffect, useState } from 'react';
import Wordle from './components/Wordle';
import WordList from './db/Words.json';

const App = () => {
  const [answer, setAnswer] = useState('');

  // When the component renders a random word will be selected as the asnwer for the guess
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * WordList.words.length);
    const randomWord = WordList.words[randomIndex];
    setAnswer(randomWord);
  },[]);

  return (
    <>
      {answer && <Wordle answer={answer} />}
    </>
  );
};

export default App;
