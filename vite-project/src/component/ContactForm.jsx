// import React from 'react';

const ContactForm = () => {
    return (
        <div>
            <form action="#" method="POST">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required />
                </div>
                <button onClick={() => alert('Hello')} type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;