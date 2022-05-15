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
                src={imgSrc}
                alt={imgAlt}
            />
            <a href={appUrl}>{appTitle}</a>
            <a href={githubUrl}>GitHub Repository</a>
        </article>
    );
};

export default Project;