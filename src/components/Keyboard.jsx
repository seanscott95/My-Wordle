const Keyboard = ({ usedKeys, handleKeyup }) => {
  return (
    <>
        <section className='keyboard'>
            <div className='row'>
                <button
                    className={usedKeys['Q']}
                    onClick={() => handleKeyup({key:'q'})}
                >Q</button>
                <button
                    className={usedKeys['W']}
                    onClick={() => handleKeyup({key:'w'})}
                >W</button>
                <button
                    className={usedKeys['E']}
                    onClick={() => handleKeyup({key:'e'})}
                >E</button>
                <button
                    className={usedKeys['R']}
                    onClick={() => handleKeyup({key:'r'})}
                >R</button>
                <button
                    className={usedKeys['T']}
                    onClick={() => handleKeyup({key:'t'})}
                >T</button>
                <button
                    className={usedKeys['Y']}
                    onClick={() => handleKeyup({key:'y'})}
                >Y</button>
                <button
                    className={usedKeys['U']}
                    onClick={() => handleKeyup({key:'u'})}
                >U</button>
                <button
                    className={usedKeys['I']}
                    onClick={() => handleKeyup({key:'i'})}
                >I</button>
                <button
                    className={usedKeys['O']}
                    onClick={() => handleKeyup({key:'o'})}
                >O</button>
                <button
                    className={usedKeys['P']}
                    onClick={() => handleKeyup({key:'p'})}
                >P</button>
            </div>
            <div className='row'>
                <button 
                    className={usedKeys['A']}
                    onClick={() => handleKeyup({key:'a'})}
                >A</button>
                <button 
                    className={usedKeys['S']}
                    onClick={() => handleKeyup({key:'s'})}
                >S</button>
                <button 
                    className={usedKeys['D']}
                    onClick={() => handleKeyup({key:'d'})}
                >D</button>
                <button 
                    className={usedKeys['F']}
                    onClick={() => handleKeyup({key:'f'})}
                >F</button>
                <button 
                    className={usedKeys['G']}
                    onClick={() => handleKeyup({key:'g'})}
                >G</button>
                <button 
                    className={usedKeys['H']}
                    onClick={() => handleKeyup({key:'h'})}
                >H</button>
                <button 
                    className={usedKeys['J']}
                    onClick={() => handleKeyup({key:'j'})}
                >J</button>
                <button 
                    className={usedKeys['K']}
                    onClick={() => handleKeyup({key:'k'})}
                >K</button>
                <button 
                    className={usedKeys['L']}
                    onClick={() => handleKeyup({key:'l'})}
                >L</button>
            </div>
            <div className='row'>
                <button 
                    className={usedKeys['Z']}
                    onClick={() => handleKeyup({key:'z'})}
                >Z</button>
                <button 
                    className={usedKeys['X']}
                    onClick={() => handleKeyup({key:'x'})}
                >X</button>
                <button 
                    className={usedKeys['C']}
                    onClick={() => handleKeyup({key:'c'})}
                >C</button>
                <button 
                    className={usedKeys['V']}
                    onClick={() => handleKeyup({key:'v'})}
                >V</button>
                <button 
                    className={usedKeys['B']}
                    onClick={() => handleKeyup({key:'b'})}
                >B</button>
                <button 
                    className={usedKeys['N']}
                    onClick={() => handleKeyup({key:'n'})}
                >N</button>
                <button 
                    className={usedKeys['M']}
                    onClick={() => handleKeyup({key:'m'})}
                >M</button>
                <button 
                    className='backspace'
                    onClick={() => handleKeyup({key:'Backspace'})}
                >{String.fromCharCode(8592)}
                </button>
            </div>
            <div className="row">
                <button 
                    className='submit'
                    onClick={() => handleKeyup({key:'Enter'})}
                >SUBMIT</button>
            </div>
        </section>
    </>
  );
};

export default Keyboard;