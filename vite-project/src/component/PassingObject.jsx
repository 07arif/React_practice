

const PassingObject = (props) => {
    return (
        <div>
            <h1>Passing Object </h1>
            <ul>
                <li>Name:{props.item['name']}</li>
                <li>Age:{props.item['age']}</li>
                <li>City:{props.item['city']}</li>

            </ul>
        </div>
    );
};

export default PassingObject;