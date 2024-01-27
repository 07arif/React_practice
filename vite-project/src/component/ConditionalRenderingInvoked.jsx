
const ConditionalRenderingInvoked = () => {
    let status = false;
    return (
        <div>
            {(() => {
                if (status === true) {
                    return <button>Logout Button</button>
                }
                else {
                    return <button>Login Button</button>
                }

            })()}
        </div>
    );
};

export default ConditionalRenderingInvoked;