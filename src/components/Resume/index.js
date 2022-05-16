// RESUME

import React from 'react';

function Resume() {
    return(
        <section className="Resume">
            <form>
                <fieldset>
                    <legend>Full Stack Web Development</legend>
                    <div className="bio-text">
                        <h3>Languages / Technologies</h3>
                        <ul>
                            <li>JavaScript (ES6) / HTML / CSS</li>
                            <li>3rd Party APIs / Frameworks (Bootstrap, Bulma, jQuery, etc.)</li>
                            <li className="italic">Comprehending Documentation</li>
                            <li>Node.JS / Express.JS / AJAX</li>
                            <li>SQL / MongoDB</li>
                            <li>React</li>
                        </ul>
                        <h3>Skills</h3>
                        <ul>
                            <li>AGILE / OOP / TDD</li>
                            <li>Model View Controller / Progressive Web Application</li>
                            <li>MERN Stack</li>
                        </ul>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default Resume;