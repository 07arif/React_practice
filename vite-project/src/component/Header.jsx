// import React from 'react';

import ConditionalRendering from "./ConditionalRendering";

const Header = () => {
    return (
        <div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                <li> <ConditionalRendering /> </li>
            </ul>
        </div>
    );
};

export default Header;