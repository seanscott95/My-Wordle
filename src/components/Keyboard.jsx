import { useState } from "react";

const Keyboard = () => {
    // create keys for colouring
    // render all keys as a keyboard
    // add color to keys

    // Creates an array of strings for each letter in the alphabet
    // Converts the array by using the alphabets char code numbers
    const arr = Array.from(Array(26)).map((_, int) => String.fromCharCode(int + 65));
    // Converts arr of strings to an array with each letter as a key
    const keysArr = arr.reduce((acc, curr) => (acc[curr]='', acc), [])

    // const [keys, setKeys] = useState(keysArr);
    // console.log('keysArr', keysArr)

  return (
    <>
        <section>
            <div className='row'>
                <button className={keysArr['Q']}>Q</button>
                <button className={keysArr['W']}>W</button>
                <button className={keysArr['E']}>E</button>
                <button className={keysArr['R']}>R</button>
                <button className={keysArr['T']}>T</button>
                <button className={keysArr['Y']}>Y</button>
                <button className={keysArr['U']}>U</button>
                <button className={keysArr['I']}>I</button>
                <button className={keysArr['O']}>O</button>
                <button className={keysArr['P']}>P</button>
                <button className={keysArr['Backspace']}>{String.fromCharCode(8592)}</button>
            </div>
            <div className='row'>
                <button className={keysArr['A']}>A</button>
                <button className={keysArr['S']}>S</button>
                <button className={keysArr['D']}>D</button>
                <button className={keysArr['F']}>F</button>
                <button className={keysArr['G']}>G</button>
                <button className={keysArr['H']}>H</button>
                <button className={keysArr['J']}>J</button>
                <button className={keysArr['K']}>K</button>
                <button className={keysArr['L']}>L</button>
                <button className={keysArr['Enter']}>Enter</button>
            </div>
            <div className='row'>
                <button className={keysArr['Z']}>Z</button>
                <button className={keysArr['X']}>X</button>
                <button className={keysArr['C']}>C</button>
                <button className={keysArr['V']}>V</button>
                <button className={keysArr['B']}>B</button>
                <button className={keysArr['N']}>N</button>
                <button className={keysArr['M']}>M</button>
            </div>
        </section>
    </>
  );
};

export default Keyboard;