// import React from 'react';

import { useRef } from "react";

const UseRefCachingExpensiveComputation = () => {

    let APIData = useRef(null);
    let myPTag = useRef();


    // js er fetch use kore dummy api call 
    const fetchData = async () => {
        const response = await fetch('https://dummyjson.com/products')
        // APIData er modde store kora
        APIData.current = await response.json()
    }

    const showData = () => {
        myPTag.current.innerText = JSON.stringify(APIData.current)
    }


    return (
        <div>
            <h1>Caching Expensive computation </h1>
            <p ref={myPTag}></p>
            <button onClick={fetchData}>Call API</button>
            <button onClick={showData}>Show Data</button>
        </div>
    );
};

export default UseRefCachingExpensiveComputation;