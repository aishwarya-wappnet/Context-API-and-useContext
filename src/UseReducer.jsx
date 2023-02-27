import React, { useState, useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    console.log(state, action);
    // return state;
    if(action.type === 'INCREMENT'){
        return state + 1;
    }
    if(action.type === 'DECREMENT'){
        return state - 1;
    }
}

const UseReducer = () => {
    // const [count, setCount] = useState(0);
    // useReducer takes two arguments, first is the reducer function and second is the initital state
    // useReducer hook is same as useState hook but when there is a situation where you need to manage multiple states
    // or big projects, you use useReducer hook.
    const [state, dispatch] = useReducer(reducer, initialState); // reducer is a functions and it is a pure functions. Pure functions are functions which do not produce any side effects.
    return(
        <>
        <div>
        <h1>UseReducer</h1>
        <h1>{ state }</h1>
        {/* <button onClick={() => setCount(count+1)}>Inc</button>
        <button onClick={() => setCount(count-1)}>Dcr</button> */}
        <button onClick={() => dispatch({type: "INCREMENT"})}>Inc</button>
        <button onClick={() => dispatch({type: "DECREMENT"})}>Dcr</button>
        </div>
        </>
    )
}

export default UseReducer;