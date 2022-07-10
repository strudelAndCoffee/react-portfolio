// CONTACT

import React, { useState, useRef } from 'react';

function Contact() {

    // error message that appears above submit button in form
    const [ errorMsg, setErrorMsg ] = useState('');
    const [ formState, setFormState ] = useState({ name: '', email: '', message: ''});
    const [ blankForm, setBlankForm ] = useState(true);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const msgRef = useRef(null);

    // when any form input blurs, check if value exists
    function inputHandler(event) {
        if (!event.target.value.length) {
            let name = event.target.name;
            
            switch(name) {
                case "name":
                    setErrorMsg('Please add your name');
                    break;
                case "email":
                    setErrorMsg('Please add your email');
                    break;
                case "message":
                    setErrorMsg('Please add your message');
                    break;
                default:
                    break;
            }
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

        if (!formState.name.length) {
            setErrorMsg('Please add your name');
            nameRef.current.focus();
            return;
        }
        else if (!formState.email.length) {
            setErrorMsg('Please add your email');
            emailRef.current.focus();
            return;
        }
        else if (!formState.message.length) {
            setErrorMsg('Please add your message');
            msgRef.current.focus();
            return;
        }

        if (formState.name.length && formState.email.length && formState.message.length) {
            try {
                const { name, email, message } = formState;
                const response = fetch('http://localhost:3001/api/contact', {
                    method: 'POST',
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        message: message
                    }),
                    headers: { 'Content-Type': 'application/json' }
                })

                if (response) {
                    setFormState({
                        name: '',
                        email: '',
                        message: ''
                    });
                    nameRef.current.value = '';
                    emailRef.current.value = '';
                    msgRef.current.value = '';
            
                    setBlankForm(false);
                    return;
                } else {
                    alert("An error occured while sending your message. If the issue persists, please contact Stevie via his email listed below. We are sorry for the inconvenience!");
                }
            } catch (err) {
                alert("An error occured while sending your message. Please try again, or contact Stevie via email (listed below). We are sorry for the inconvenience!");
                console.error(err);
            }
        } else {
            if (!formState.name.length) {
                setErrorMsg('Please add your name');
                nameRef.current.focus();
            }
            else if (!formState.email.length) {
                setErrorMsg('Please add your email');
                emailRef.current.focus();
            }
            else {
                setErrorMsg('Please add your message');
                msgRef.current.focus();
            }
        }
    };

    return(
        <section className="Contact">
            {blankForm
            ? <form id="contact-form" onSubmit={submitHandler}>
                <fieldset>
                    {/* <legend>
                        <span className="color-2">Contact</span>
                    </legend> */}
                    <div>
                        <small><em>Note: this form is currently out of order.</em></small>
                    </div>
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-input"
                        ref={nameRef}
                        onBlur={inputHandler}
                        onChange={changeHandler}
                    />
                    <br />
                    <label htmlFor="email">Email </label>
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
                    <button type="submit" className="form-btn" onClick={submitHandler}>Submit</button>
                </fieldset>
             </form>
            : <div className="contact-msg-success">
                Thank you for reaching out! Please allow me a couple business days to review your message, and I will get back to you as soon as I can.
                <br />
                ~Stevie
            </div>
            }
        </section>
    );
};

export default Contact;