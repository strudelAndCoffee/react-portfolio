// RESUME

import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';

function Resume() {
    return(
        <section className="Resume">
            {/* <div className="resume-btn-container">
                <div class="resume-btn">
                    <a href="./resume-full.html">View Full Resume</a>
                </div>
            </div>

            <div className="resume-dl-link">
                <a href="./assets/docs/Resume_Stephen-Trudell.pdf" download="Resume_Stephen-Trudell">
                    <FontAwesomeIcon icon={regular('file')} /> Download
                </a>
            </div> */}

            <div className="resume-fields"> 
            <form className="resume-card">
                <fieldset className="resume-filed">
                    <legend>
                        <span className="color-2">Languages / Technologies</span>
                    </legend>
                    <div className="skills-text">
                        <div className="skills-group-card">
                            <div className="skills-card-container">
                            <h3>Front End</h3>
                            <ul>
                                <li>Semantic HTML</li>
                                <li>CSS / SCSS</li>
                                <li>3rd Party Frameworks / Libraries</li>
                                <li>JavaScript (ES6)</li>
                                <li className="italic">Reading Documentation</li>
                                <li>React</li>
                            </ul>
                            </div>
                        </div>

                        <div className="skills-group-card">
                            <div className="skills-card-container">
                            <h3>Back End</h3>
                            <ul>
                                <li>GraphQL</li>
                                <li>Node.js / Express</li>
                                <li>Jest</li>
                                <li>SQL</li>
                                <li>MongoDB</li>
                                <li>AJAX</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>

            <form className="resume-card">
                <fieldset className="resume-filed">
                    <legend>
                        <span className="color-2">Operations</span>
                    </legend>
                    <div className="skills-text">
                        <div className="skills-group-card">
                            <div className="skills-card-container">
                            <h3>Design</h3>
                            <ul>
                                <li className="italic">Comprehending Documentation</li>
                                <li>MERN Stack</li>
                                <li>Model View Controller</li>
                                <li>Progressive Web Applications</li>
                                <li>Single Page Applications</li>
                                <li>RESTful APIs</li>
                            </ul>
                            </div>
                        </div>

                        <div className="skills-group-card">
                            <div className="skills-card-container">
                            <h3>DevOps</h3>
                            <ul>
                                <li>AGILE</li>
                                <li>OOP / Functional Programming</li>
                                <li>TDD</li>
                                <li>Heroku / GitHub</li>
                                <li>Git</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
            </div>
        </section>
    );
};

export default Resume;