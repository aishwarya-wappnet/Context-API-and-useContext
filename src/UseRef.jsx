import React, { useState, useEffect, useRef } from 'react';

// eg 1: it creates a mutable variable which will not re-render the components.
// eg 2: to access a DOM element directly.

const UseRef = () => {
    // const [count, setCount] = useState(0);
    const [data, setData] = useState();

    const count = useRef(10);   
    console.log(count);

    // The useEffect is called in the first render. The count is updated, and the 
    // the component is again rendered and this process goes on. Whenever the state changes
    // in useState, the component is re rendered
    useEffect(() => {
        // setCount(count + 1);
        count.current = count.current + 1;
    })
    const inputEle = useRef("");
    const changeStyle = () => {
        // console.log(inputEle.current);
        inputEle.current.style.backgroundColor = "#82E0AA";
        inputEle.current.focus();
    }

    return (
        <>
        <h1>{ count.current }</h1> 
        <input ref={ inputEle } type="text" value={data} onChange={(e) => setData(e.target.value)}/>
        <button onClick = { changeStyle }>Submit</button>
        </> 
    )
}

export  default UseRef;