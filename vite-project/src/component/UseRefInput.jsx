// import React from 'react';

import { useRef } from "react";

const UseRefInput = () => {

    let firstName = useRef();
    let lastName = useRef();

    const change = () => {
        let fName = firstName.current.value;
        let lName = lastName.current.value;
        alert(fName + ' ' + lName)
    }


    return (
        <div>
            <input ref={firstName} placeholder="First Name" /> <br />
            <input ref={lastName} placeholder="Last  Name" /><br />
            <button onClick={change}>click</button>
        </div>
    );
};

export default UseRefInput;