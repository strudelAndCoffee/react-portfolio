// CONTACT

import React, { useState } from 'react';

function Contact() {

    // error message that appears above submit button in form
    const [ errorMsg, setErrorMsg ] = useState('');

    // when any form input blurs, check if value exists
    function inputHandler(event) {
        if (!event.target.value.length) {
            setErrorMsg(`Please add your ${event.target.name}`);
        } else {
            setErrorMsg('');
        }
    };

    // when form submit, send window alert
    function submitHandler(event) {
        event.preventDefault();
        // no database set up for contact message handling
        alert("We are unable to process your request at this time. You may contact Stevie using his email address listed below. Thank you!");
    };

    return(
        <section className="Contact">
            <form id="contact-form" onSubmit={submitHandler}>
                <fieldset>
                    <legend>Contact Stevie</legend>
                    <div>
                        <small><em>Note: this form is currently out of order.</em></small>
                    </div>
                    <label htmlFor="name">Name </label>
                    <input type="text" name="name" className="form-input" onBlur={inputHandler} />
                    <br />
                    <label htmlFor="email">Email </label>
                    <input type="email" name="email" className="form-input" onBlur={inputHandler} />
                    <br />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" className="form-text" onBlur={inputHandler}></textarea>
                    <p>{errorMsg}</p>
                    <button type="submit" className="form-btn">Submit</button>
                </fieldset>
            </form>
        </section>
    );
};

export default Contact;