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
        // take guess and split into letters
        const guess = currentGuess.toLowerCase().split('');
        const ans = answer.toLowerCase().split('');

        let guessArr = guess.map((item) => {
            return {
                key: item,
                color: 'grey'
            };
        });

        // Checks to see if the letters in the currentGuess are in the correct position
        guessArr.forEach((obj, index) => {
            // If letter is in correct position, the guessArr color will be green
            if (ans[index] === obj.key) {
                obj.color = 'green';
                // set answer index to null when obj index is colored green
                // this is done so when we check to see if a guesses letter is anywhere in the answer for yellow
                // we cant use the green letter again to match for a yellow
                ans[index] = null;
            };
        });
        // If letter is in incorrect position, the guessArr color will be yellow
        guessArr.forEach((obj, index) => {
            if(ans.includes(obj.key) && obj.color !== 'green') {
                obj.color = 'yellow';
                ans[ans.indexOf(obj.key)] =  null;
            };
        });

        setFormattedGuess(guessArr);
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
            // if (guessHistory.includes(currentGuess)) {
            //     console.log('Already guess that')
            //     return;
            // }
            if (currentGuess.length !== 5) {
                console.log('Guess must be 5 letters')
                return
            };
            formatGuess();
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