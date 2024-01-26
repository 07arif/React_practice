// import React from 'react';

import JsOn from "./JsOn";

const Hero = () => {
    return (
        <div>

            <section className="hero">
                <div className="hero-content">
                    <h1 style={{ color: 'red', background: 'yellow' }}>Welcome to Our Website</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button>Learn More</button>
                    <img src="link" alt="" />
                    <JsOn />
                </div>
            </section>
        </div>
    );
};

export default Hero;