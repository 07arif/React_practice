// import React from 'react';
import { useRef } from 'react';

const UseRefHook = () => {
    let myHeadLine = useRef();

    const change = () => {
        myHeadLine.current.innerHTML = '<ul><li>A</li><li>B</li></ul>'
        // myHeadLine.current.innerText = 'hello Bangladesh'

    }

    return (
        <div>
            <h1>Hello useRefHook</h1>
            <h1 ref={myHeadLine}></h1>
            <button onClick={change}>Click</button>
        </div>
    );
};

export default UseRefHook;