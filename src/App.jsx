import { useEffect, useState } from 'react';
import Wordle from './components/Wordle';
import WordList from './db/Words.json';

const App = () => {
  const [answer, setAnswer] = useState('');
  const generateRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * WordList.words.length);
    const randomWord = WordList.words[randomIndex];
    setAnswer(randomWord);
  }

  // When the component renders a random word will be selected as the asnwer for the guess
  useEffect(() => {
    generateRandomWord();
  },[setAnswer]);

  return (
    <div className='pageContainer'>
      {answer && <Wordle answer={answer} generateRandomWord={generateRandomWord} />}
    </div>
  );
};

export default App;
