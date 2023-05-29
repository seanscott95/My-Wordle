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
    
    // formatedGuesses
    //      change the guess into an object that has the correct color for each letter
    const formattedGuesses = () => {

    };
    // handleKeyup 
    //      add letter to box
    //      handle backspace key
    //      handle enter key, format guesses
    const handleKeyup = () => {

    };

    // addGuess
    //      add guess to guessHistory
    //      add 1 to turn
    //      check to see if guess is correct
    const addGuess = () => {

    };

    return { turn, currentGuess, formattedGuess, guessIsCorrect, handleKeyup};
}

export default useWordle;