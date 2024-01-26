// import React from 'react';

const ConditionalRendering = () => {

    const status = true;

    if (status == true) {
        return (
            <div>
                <button>Logout</button>
            </div>
        );
    }
    else {
        return (
            <div>
                <button>Login</button>
            </div>
        )
    }
};

export default ConditionalRendering;