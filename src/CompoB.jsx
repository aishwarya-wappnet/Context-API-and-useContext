import React, { useContext } from 'react';
import CompoC from './CompoC';
import { FirstName, LastName } from './App';

const CompoB = () => {
    const fn = useContext(FirstName);
    const ln = useContext(LastName);

    return (
        <>
        <CompoC />
        <h1>Using useContext: {fn} {ln}</h1>
        </>
    );
}

export default CompoB;