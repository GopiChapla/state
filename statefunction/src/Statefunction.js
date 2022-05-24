import React, { useState } from 'react';

function Statefunction()
{
    const [count,setCount]=useState(1);

    const addCount=()=>{
        setCount(count+1)
    }

    const removeCount=()=>{
        setCount(count-1)
    }

    return(
        <div>
            <p>State with Function</p>
            <p>Count : {count}</p>
            <button onClick={addCount}>+</button>&nbsp;
            <button onClick={removeCount}>-</button>
        </div>
    )
}

export default Statefunction;