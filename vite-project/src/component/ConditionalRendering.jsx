const LoginStatusBtn = (status) => {
    if (status) {
        return <button>Logout Btn</button>
    }
    else {
        return <button>Login Btn</button>
    }
}


const ConditionalRendering = () => {
    return (
        <div>
            <h1>Login Status</h1>
            {LoginStatusBtn(false)}
        </div>
    )



    /* conditional rendering using if else:
        const status = false;
    
        if (status == true) {
            return (
                <div>
                    <button>Logout</button>
                </div>
            )
        }
        else return (
            <div>
                <button>LogIn</button>
            </div>
        )
    */
};

export default ConditionalRendering;