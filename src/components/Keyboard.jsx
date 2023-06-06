const Keyboard = ({ usedKeys }) => {
  return (
    <>
        <section className='keyboard'>
            <div className='row'>
                <button className={usedKeys['Q']}>Q</button>
                <button className={usedKeys['W']}>W</button>
                <button className={usedKeys['E']}>E</button>
                <button className={usedKeys['R']}>R</button>
                <button className={usedKeys['T']}>T</button>
                <button className={usedKeys['Y']}>Y</button>
                <button className={usedKeys['U']}>U</button>
                <button className={usedKeys['I']}>I</button>
                <button className={usedKeys['O']}>O</button>
                <button className={usedKeys['P']}>P</button>
            </div>
            <div className='row'>
                <button className={usedKeys['A']}>A</button>
                <button className={usedKeys['S']}>S</button>
                <button className={usedKeys['D']}>D</button>
                <button className={usedKeys['F']}>F</button>
                <button className={usedKeys['G']}>G</button>
                <button className={usedKeys['H']}>H</button>
                <button className={usedKeys['J']}>J</button>
                <button className={usedKeys['K']}>K</button>
                <button className={usedKeys['L']}>L</button>
            </div>
            <div className='row'>
                <button className={usedKeys['Z']}>Z</button>
                <button className={usedKeys['X']}>X</button>
                <button className={usedKeys['C']}>C</button>
                <button className={usedKeys['V']}>V</button>
                <button className={usedKeys['B']}>B</button>
                <button className={usedKeys['N']}>N</button>
                <button className={usedKeys['M']}>M</button>
                <button className='backspace'>{String.fromCharCode(8592)}</button>
            </div>
            <div className="row">
                <button className='enter'>SUBMIT</button>
            </div>
        </section>
    </>
  );
};

export default Keyboard;