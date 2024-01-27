
const ConditionalRenderingLogical = () => {
    let status = true;
    return (
        <div>
            <h1>LongIn Status</h1>
            {status && <button>Logout Button</button>}
        </div>
    );
};

export default ConditionalRenderingLogical;