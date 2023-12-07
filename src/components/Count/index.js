import React, { useState } from 'react';

const Count = () => {
    const [number, setNumber] = useState(0);
    const increment = (x) => {
        setNumber(number + x);
    }
    const decrement = () => {
        if(number <= 0) return;
        setNumber(number - 1);
    }
    return(
        <div>
            <button onClick={decrement}>-1</button>
            <button onClick={() =>{increment(1)}}>{number}</button>
            <button onClick={() =>{increment(10)}}>+10</button>
        </div>
    )   
}

export default Count;