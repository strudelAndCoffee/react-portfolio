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

    function handleAppLinkClick(e) {
        e.preventDefault();

        try {
            fetch('/api/readmore', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: { type: 'project-app-link' }
            })
        } catch (err) {
            console.error(err);
        }
    };

    function handleGithubClick(e) {
        e.preventDefault();

        try {
            fetch('/api/readmore', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: { type: 'project-github-link' }
            })
        } catch (err) {
            console.error(err);
        }
    };

    return(
        <div className="Project">
            <a
                className="img-link"
                href={appUrl}
                target="_blank"
                rel="noreferrer"
                onClick={handleAppLinkClick}
            >
                <img 
                    src={require(`../../assets/images/${imgSrc}`)}
                    alt={imgAlt}
                />
            </a>
            <a
                className="app-title"
                href={appUrl}
                target="_blank"
                rel="noreferrer"
                onClick={handleAppLinkClick}
            >
                {appTitle}
            </a>
            <br />
            <a
                className="link"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={handleGithubClick}
            >
                <IconContext.Provider value={{ size: '1em' }}>
                    <GoMarkGithub />
                </IconContext.Provider>
                <span className="indent-xs">View</span> GitHub Repository
            </a>
        </div>
    );
};

export default Project;