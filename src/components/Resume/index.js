// RESUME

import React from 'react';

function Resume() {
    return(
        <section className="Resume">
            <form>
                <fieldset>
                    <legend>
                        <span className="color-2">Languages / Technologies</span>
                    </legend>
                    <div className="bio-text">
                        <h3>Front End</h3>
                        <ul>
                            <li>Semantic HTML</li>
                            <li>CSS / Bootstrap / Bulma</li>
                            <li>JavaScript (ES6)</li>
                            <li className="italic">Reading Documentation</li>
                            <li>React</li>
                        </ul>
                        <h3>Back End</h3>
                        <ul>
                            <li>Node.js / Jest / Handlebars</li>
                            <li>Express / AJAX</li>
                            <li>SQL / MongoDB</li>
                            <li>GraphQL</li>
                        </ul>
                    </div>
                </fieldset>
            </form>

            <form>
                <fieldset>
                    <legend>
                        <span className="color-2">Skills</span>
                    </legend>
                    <div className="bio-text">
                        <h3>Design / Architecture</h3>
                        <ul>
                            <li className="italic">Comprehending Documentation</li>
                            <li>REST APIs</li>
                            <li>Model View Controller</li>
                            <li>Progressive Web Applications</li>
                            <li>MERN Stack</li>
                        </ul>
                        <h3>Development Practices</h3>
                        <ul>
                            <li>AGILE</li>
                            <li>OOP</li>
                            <li>TDD</li>
                        </ul>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default Resume;