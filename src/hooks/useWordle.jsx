import { useState } from "react";

const useWordle = (answer) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [formattedGuesses, setFormattedGuesses] = useState([...Array(6)]); // array of objects, objects are letter and color
    const [guessHistory, setGuessHistory] = useState([]); // array of strings
    const [guessIsCorrect, setGuessIsCorrect] = useState(false);

    // Creates an array of strings for each letter in the alphabet
    // Converts the array by using the alphabets char code numbers
    const arr = Array.from(Array(26)).map((_, int) => String.fromCharCode(int + 65));
    // Converts arr of strings to an array with each letter as a key
    const keysArrTemplate = arr.reduce((acc, curr) => (acc[curr] = 'normal', acc), []);

    const [usedKeys, setUsedKeys] = useState(keysArrTemplate);

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
        guessArr.forEach((obj) => {
            if (ans.includes(obj.key) && obj.color !== 'green') {
                obj.color = 'yellow';
                ans[ans.indexOf(obj.key)] = null;
            };
        });

        return guessArr;
    };

    const addGuess = (updatedGuess) => {
        if (currentGuess.toLowerCase() === answer.toLowerCase()) {
            console.log('Guess is correct!!');
            setGuessIsCorrect(true);
        };

        setTurn((prevTurn) => prevTurn + 1);

        setGuessHistory((prevHistory) => {
            return [...prevHistory, currentGuess];
        });

        setFormattedGuesses((prev) => {
            let newGuesses = [...prev];
            newGuesses[turn] = updatedGuess;
            return newGuesses;
        });

        setUsedKeys((prevUsedKeys) => {
            let newKeys = { ...prevUsedKeys };

            formattedGuesses.forEach((letter) => {
                if (!letter) {
                    return;
                };
                letter.forEach((l) => {
                    const currentColor = newKeys[l.key];
                    if (l.color === 'green') {
                        newKeys[l.key.toUpperCase()] = 'green';
                        return;
                    };
                    if (l.color === 'yellow' && currentColor !== 'green') {
                        newKeys[l.key.toUpperCase()] = 'yellow';
                        return;
                    };
                    if (l.color === 'grey' && currentColor !== 'green' && currentColor !== 'yellow') {
                        newKeys[l.key.toUpperCase()] = 'grey';
                        return;
                    };
                });
            });
            console.log('nk', newKeys)

            return newKeys;
        });

        setCurrentGuess('');
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
            if (turn > 5) {
                console.log("5 guesses done")
                return;
            };
            if (guessHistory.includes(currentGuess)) {
                console.log('Already guess that')
                return;
            };
            if (currentGuess.length !== 5) {
                console.log('Guess must be 5 letters')
                return
            };
            const updatedGuess = formatGuess();
            addGuess(updatedGuess);
        };
    };

    return { turn, currentGuess, formattedGuesses, guessIsCorrect, handleKeyup, guessHistory, usedKeys };
}

export default useWordle;