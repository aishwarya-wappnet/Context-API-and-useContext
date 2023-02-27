import React from 'react';
import { FirstName, LastName, Email } from './App';

const CompoC = () => {
    return (
        <>
        <FirstName.Consumer>
        {(fname) => {
            return (
                <LastName.Consumer>
                    {(lname) => {
                        return (
                           <Email.Consumer>
                            {(email) => {
                                return (
                                    <>
                                <h1>Using Context API: </h1>
                                 <h2>Name: {fname} {lname}</h2>  
                                 <h2>Email: {email}</h2>
                                </>
                                )
                            }}
                            </Email.Consumer>
                        )
                    }}
                </LastName.Consumer>
            )
        }}
        </FirstName.Consumer>
            </>
    )
}

export default CompoC;