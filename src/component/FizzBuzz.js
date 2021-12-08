import React, { useState } from 'react';

const FizzBuzz = () => {
    const [count, setCount] = useState('');
    const [start, setStart] = useState(false);
    const handleChange = (e) => {
        setCount(e.target.value)
        setStart(false)
    };
    const resetRadioState = () => {setCount('')};

    return (
        <div className='fizzBuzz'>
        <h1>FizzBuzz</h1>
        <p>C'est simple tu entre un nombre, si il est divisible par 3, Fizz apparaîtra, si il est divible par 5, Buzz apparaîtra et si il est divible par 3 et 5 alors FizzBuzz apparaîtra. </p>
        <label htmlFor='Numero'>Entre ton numero :</label>
        <input min='1' value={count} onChange={handleChange} type='number'/>
        <button onClick={() =>setStart(true)}>Start</button>
        <button onClick={resetRadioState}>Reset</button>
        {start && <h2> 
          { 
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