// import React from 'react';

import { useRef } from "react";

const UseRefAttributes = () => {
    let myImg = useRef();
    const change = () => {
        myImg.current.src = "https://placehold.co/600x400?text=Hello+World"
        myImg.current.setAttribute('height', '300px')
        myImg.current.setAttribute('width', '200px')
    }
    return (
        <div>
            <h1>UseREF Attributes </h1>
            <img ref={myImg} src="https://placehold.co/600x400" />
            <button onClick={change}>Click</button>
        </div>
    );
};

export default UseRefAttributes;