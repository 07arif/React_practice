// import React from 'react';

import ConditionalRendering from "./ConditionalRendering";
import ConditionalRenderingInvoked from "./ConditionalRenderingInvoked";
import ConditionalRenderingLogical from "./ConditionalRenderingLogical";
import ConditionalRenderingSwitch from "./ConditionalRenderingSwitch";
import ConditionalRenderingTernary from "./ConditionalRenderingTernary";
import Invoked_JS from "./Invoked_JS";
import JsOn from "./JsOn";
import LoopJs from "./LoopJs";

const Hero = () => {
    return (
        <div>

            <section className="hero">
                <div className="hero-content">
                    <h1 style={{ color: 'red', background: 'yellow' }}>Welcome to Our Website</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button>Learn More</button>
                    <img src="link" alt="" />
                    <p>Inline If else</p>
                    <JsOn />
                    <p>Invoked </p>
                    <Invoked_JS />
                    <p>Loop</p>
                    <LoopJs />
                    <p>Conditional Rendering using if else function </p>
                    <ConditionalRendering />
                    <p>Conditional Rendering using Case Statement</p>
                    <ConditionalRenderingSwitch />
                    <p>Conditional Rendering using Ternary Operators</p>
                    <ConditionalRenderingTernary />
                    <p>Conditional Rendering using Logical Operators</p>
                    <ConditionalRenderingLogical />
                    <p>Conditional Rendering using immediately Invoked function </p>
                    <ConditionalRenderingInvoked />

                </div>
            </section>
        </div>
    );
};

export default Hero;