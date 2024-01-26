// import React from 'react';

const JsOn = () => {
    let marks = 80;
    return (
        <div>
            {
                marks > 80 ?
                    <h1>Brilliant result</h1>
                    :
                    <h1>Average result</h1>
            }
        </div>
    );
};

export default JsOn;