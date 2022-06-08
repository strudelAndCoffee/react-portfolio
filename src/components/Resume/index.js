// RESUME

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';

function Resume() {
    return(
        <section className="Resume">
            <div className="resume-btn-container">
                <div class="resume-btn">
                    <a href="./resume-full.html">View Full Resume</a>
                </div>
            </div>

            {/* <div className="resume-dl-link">
                <a href="./assets/docs/Resume_Stephen-Trudell.pdf" download="Resume_Stephen-Trudell">
                    <FontAwesomeIcon icon={regular('file')} /> Download
                </a>
            </div> */}

            <div className="resume-fields"> 
            <form className="resume-card">
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

            <form className="resume-card">
                <fieldset>
                    <legend>
                        <span className="color-2">Operations</span>
                    </legend>
                    <div className="bio-text">
                        <h3>Design / Architecture</h3>
                        <ul>
                            <li className="italic">Comprehending Documentation</li>
                            <li>RESTful APIs</li>
                            <li>Model View Controller</li>
                            <li>Progressive Web Applications</li>
                            <li>Single Page Applications</li>
                            <li>MERN Stack</li>
                        </ul>
                        <h3>Development Practices</h3>
                        <ul>
                            <li>AGILE</li>
                            <li>OOP</li>
                            <li>TDD</li>
                            <li>Git / GitHub</li>
                        </ul>
                    </div>
                </fieldset>
            </form>
            </div>
        </section>
    );
};

export default Resume;