// CONTACT

import React, { useState, useRef } from 'react';

function Contact() {
    // error message that appears above submit button in form
    const [ errorMsg, setErrorMsg ] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const msgRef = useRef(null);

    // when any form input blurs, check if value exists
    function inputHandler(event) {
        if (!event.target.value.length) {
            setErrorMsg(`Please add your ${event.target.name}`);
        } else {
            setErrorMsg('');
        }
    };

    const changeHandler = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
    };

    const submitHandler = async event => {
        event.preventDefault();
        nameRef.current.value = '';
        emailRef.current.value = '';
        msgRef.current.value = '';

        if (formState.name.length && formState.email.length && formState.message.length) {
            try {
                const { name, email, message } = formState;
                fetch('http://localhost:3001/api/contact', {
                    method: 'POST',
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        message: message
                    }),
                    headers: { 'Content-Type': 'application/json' }
                })
            } catch (err) {
                console.error(err);
            }
        } else {
            setErrorMsg("Please fill out all fields.");
            return;
        }

        setFormState({
            name: '',
            email: '',
            message: ''
        });
    };

    return(
        <section className="Contact">
            <form id="contact-form" onSubmit={submitHandler}>
                <fieldset>
                    <legend>
                        <span className="color-2">Contact</span>
                    </legend>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-input"
                        ref={nameRef}
                        onBlur={inputHandler}
                        onChange={changeHandler}
                    />
                    <br />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-input"
                        ref={emailRef}
                        onBlur={inputHandler} 
                        onChange={changeHandler}
                    />
                    <br />
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        className="form-text"
                        ref={msgRef}
                        onBlur={inputHandler}
                        onChange={changeHandler}
                    ></textarea>
                    <p>{errorMsg}</p>
                    <button type="submit" className="form-btn">Submit</button>
                </fieldset>
            </form>
        </section>
    );
};

export default Contact;