// PROJECT

import React from 'react';

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
                <h3>{appTitle}</h3>
            </a>
            <a href={githubUrl}>View GitHub Repository</a>
        </article>
    );
};

export default Project;