import React, { useContext } from 'react';
import CompoC from './CompoC';
import { FirstName, LastName, Email } from './App';

const CompoB = () => {
    const fn = useContext(FirstName);
    const ln = useContext(LastName);
    const email = useContext(Email);

    return (
        <>
        <CompoC />
        <h1>Using useContext:</h1>
        <h2>Name: {fn} {ln}</h2>
        <h2>Email: {email}</h2>
        </>
    );
}

export default CompoB;