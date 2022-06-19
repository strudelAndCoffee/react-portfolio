// PROJECT

import React from 'react';
import { IconContext } from "react-icons";
import { GoMarkGithub } from "react-icons/go";

function Project(props) {
    const {
        imgSrc,
        imgAlt,
        appTitle,
        appUrl,
        githubUrl
    } = props;

    return(
        <article className="Project">
            <img 
                src={require(`../../assets/images/${imgSrc}`)}
                alt={imgAlt}
            />
            <a href={appUrl} target="_blank" rel="noreferrer">
                <span className="link app-title">
                    {appTitle}
                </span>
            </a>
            <br />
            <a className="link" href={githubUrl} target="_blank" rel="noreferrer">
                <IconContext.Provider value={{ size: '0.9em' }}>
                    <GoMarkGithub />
                </IconContext.Provider>
                <span className="indent-xs">View</span> GitHub Repository
            </a>
        </article>
    );
};

export default Project;