// CONTACT

import React from 'react';

function Contact() {
    return(
        <section className="Contact">
            <form id="contact-form">
                <fieldset className="input-container">
                    <legend>Contact Stevie</legend>
                    <label for="name">Name </label>
                    <input type="text" id="name" className="form-input" />
                    <br />
                    <label for="email">Email </label>
                    <input type="email" id="email" className="form-input" />
                    <br />
                    <label for="message">Message</label>
                    <textarea id="message" className="form-text"></textarea>
                    <br />
                    <button type="submit" id="form-submit" className="form-btn">Submit</button>
                </fieldset>
            </form>
        </section>
    );
};

export default Contact;