// import React from 'react';

import { useRef } from "react";

const UseRefInput = () => {

    let firstName = useRef();
    let lastName = useRef();

    const change = () => {
        let fName = firstName.value;
        let lName = lastName.value;
        // let fName = firstName.current.value;
        // let lName = lastName.current.value;
        alert(fName + ' ' + lName)
    }


    return (
        <div>
            <input ref={(a) => firstName = a} placeholder="First Name" /> <br />
            <input ref={(a) => lastName = a} placeholder="Last Name" /> <br />
            {/* <input ref={lastName} placeholder="Last  Name" /><br /> */}
            <button onClick={change}>click</button>
        </div>
    );
};

export default UseRefInput;