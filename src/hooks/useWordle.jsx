import { useState } from "react";

const useWordle = (answer) => {
    // answer, string
    // turn (1-5), number
    // currentGuess (displays current guess that you type), 
    // formattedGuesses (current guess, the 5 letters), array of objects, objects are letter and color
    // guessHistory, array of strings
    // guessIsCorrect, boolean

    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [formattedGuess, setFormattedGuess] = useState([]); // array of objects, objects are letter and color
    const [guessHistory, setGuessHistory] = useState([]); // array of strings
    const [guessIsCorrect, setGuessIsCorrect] = useState(false);

    const formatGuess = () => {
        
    };

    const handleKeyup = ({ key }) => {
        // Deletes last letter of guess
        if (key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1);
            });
            return;
        };
        // Regex that tests to see if the key is a letter and only returns letters
        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => prev + key);
            };
        };
        if (key === 'Enter') {
            if (turn > 5 ) {
                console.log("5 guesses done")
                return;
            }
            if (guessHistory.includes(currentGuess)) {
                console.log('Already guess that')
                return;
            }
            if (currentGuess.length !== 5) {
                console.log('Guess must be 5 letters')
                return
            };
            formatGuess(currentGuess);
            setGuessHistory((prev) => prev + currentGuess)
        };
    };

    // addGuess
    //      add guess to guessHistory
    //      add 1 to turn
    //      check to see if guess is correct
    const addGuess = () => {

    };

    return { turn, currentGuess, formattedGuess, guessIsCorrect, handleKeyup, guessHistory };
}

export default useWordle;