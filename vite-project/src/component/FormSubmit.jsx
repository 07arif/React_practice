const FormSubmit = () => {

    const PostFormData = (event) => {
        event.preventDefault();
        alert('Form Submitted')
    }
    return (
        <div>
            <h1>Form Submit</h1>
            <form onSubmit={PostFormData}>
                <input placeholder="name" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormSubmit;