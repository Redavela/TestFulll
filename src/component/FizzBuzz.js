import React, { useState } from 'react';

const FizzBuzz = () => {
  //On initialise les states
    const [count, setCount] = useState('');
    const [start, setStart] = useState(false);
    //fonction pour changer l'état de nos states au clique
    const handleChange = (e) => {
        setCount(e.target.value)
        setStart(false)
    };

    // fonction pour remettre à zéro
    const resetRadioState = () => {setCount('')};

    return (
        <div className='fizzBuzz'>
        <h1>FizzBuzz</h1>
        <p>C'est simple tu entre un nombre, tu appuie sur Start, si il est divisible par 3, Fizz apparaîtra, si il est divible par 5, Buzz apparaîtra et si il est divible par 3 et 5 alors FizzBuzz apparaîtra.
        Sinon le chiffre choisi apparaîtra.Tu peux réinitialiser avec Reset </p>
        <label htmlFor='Numero'>Entre ton numero :</label>
        <input min='1' value={count} onChange={handleChange} type='number'/>
        {/* les fonctions sont appelées ici au clique */}
        <button onClick={() =>setStart(true)}>Start</button>
        <button onClick={resetRadioState}>Reset</button>
        {/* Si start est à true on fait apparaitre le h2 */}
        {start && <h2> 
          { 
            {/* Les diffèrentes conditions */}
            (count === "") ? '' :
            (count % 15 === 0) ? "FizzBuzz" : 
            (count % 3 === 0)  ? "Fizz"     : 
            (count % 5 === 0)  ? "Buzz"     : 
            count
          }
        </h2>} 
        </div>
    );
};

export default FizzBuzz;