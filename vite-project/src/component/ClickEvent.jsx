
const ClickEvent = () => {
    function Demo() {
        alert('Click')
    }
    return (
        <div>
            <h1>CLick event</h1>

            <button onClick={Demo}>Submit</button>


            {/* Arrow Function:
            <button onClick={() => {
                alert('click')
            }}>Submit</button> */}

            {/* 
            Page refresh nile execute hobe.##Can't Use
            <button onClick={alert('Click')}>Submit</button> 
            */}
        </div>
    );
};

export default ClickEvent;