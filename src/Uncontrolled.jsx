import React, { useRef, useState } from 'react';

const Uncontrolled = () => {

    // useRef hook is like useState only and it preserve the value. It doesn't re render the component
    const name = useRef(null);
    const [show, setShow] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        const name2 = name.current.value;
        name2 === "" ? alert("Please enter your name") : setShow(true);
    }
    return (
        <>
        <h1>Uncontrolled</h1>
        <form action="" onSubmit={submitForm}>
            <div>
                <label htmlFor="name">Enter your name:</label>
                <input ref={name} type="text" id="name"/>
            </div>
            <button >Submit</button>
            <p>{ show ? `Your name is ${name.current.value}` : "No name yet" }</p>
        </form>
        </>
    )
}

export default Uncontrolled;