// import React from 'react';

import { useRef } from "react";

const UseRefCss = () => {

    // 2.declare useRef
    let myHeadLine = useRef();

    // 1.create function
    const change = () => {
        // remove css attribute
        myHeadLine.current.classList.remove('text-success')
        // add css attribute
        myHeadLine.current.classList.add('text-danger')
    }
    return (
        <div>
            {/* use ref */}
            <h1 className="text-success" ref={myHeadLine}>This is Headline </h1>
            {/* use function */}
            <button onClick={change}>Click</button>
        </div>
    );
};

export default UseRefCss;