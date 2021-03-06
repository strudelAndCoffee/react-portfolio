// RESUME

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';

function Resume() {
    return(
        <section className="Resume">
            <div className="resume-btn-container">
                <div
                    class="resume-btn"
                >
                    <a
                        href="./resume-full.html"
                        target="_blank"
                        rel="noreferrer"
                    >View Full Resume</a>
                </div>
            </div>
            <div className="resume-btn-container">
                <div
                    class="resume-btn"
                >
                    <a
                        href="./assets/docs/Resume_Trudell,Stephen.pdf"
                        download="Resume_Trudell,Stephen"
                    >
                        <FontAwesomeIcon icon={regular('file')} /> Download
                    </a>
                </div>
            </div>

            <div className="resume-fields"> 
            <article className="resume-card">
                    <h3 className="resume-card-header">Languages / Technologies</h3>
                    <div className="skills-text">
                        <div className="skills-group-card">
                            <div className="skills-card-container">
                            <h3>Front End</h3>
                            <ul>
                                <li>Semantic HTML</li>
                                <li>CSS / SCSS</li>
                                <li>Bootstrap / Bulma / Tailwind</li>
                                <li>JavaScript / Typescript</li>
                                <li className="italic">Reading Documentation</li>
                                <li>React / Next.js</li>
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
                                <li>SQL / MySQL</li>
                                <li>MongoDB / NoSQL</li>
                                <li>AJAX</li>
                                <li>RESTful APIs</li>
                            </ul>
                            </div>
                        </div>
                    </div>
            </article>

            <article className="resume-card">
                    <h3 className="resume-card-header">Operations</h3>
                    <div className="skills-text">
                        <div className="skills-group-card">
                            <div className="skills-card-container">
                            <h3>Design</h3>
                            <ul>
                                <li className="italic">Comprehending Documentation</li>
                                <li>MERN Stack</li>
                                <li>Search Engine Optimization</li>
                                <li>Model View Controller</li>
                                <li>Progressive Web Applications</li>
                                <li>Single Page Applications</li>
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
                                <li>AWS / Heroku / GitHub</li>
                                <li>Git</li>
                            </ul>
                            </div>
                        </div>
                    </div>
            </article>
            </div>
        </section>
    );
};

export default Resume;