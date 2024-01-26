// import React from 'react';

const LoopJs = () => {

    const city = ['chittagong', 'dhaka', 'kolkata', 'Dhaka']
    return (
        <div>
            <ul>
                {
                    city.map((item, i) => {
                        return <li key={i.toString}>{item}</li>
                    })
                }

            </ul>
        </div>
    );
};

export default LoopJs;