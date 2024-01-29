// import React from 'react';

import { useRef } from "react";

const UseRefPersistedMutable = () => {

    let number = useRef(0);

    const change = () => {
        number.current++;
        console.log(number.current)
    }
    return (
        <div>

            <button onClick={change}>Click</button>
        </div>
    );
};

export default UseRefPersistedMutable;