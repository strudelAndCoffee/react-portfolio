// PROJECT

import React, { useState, useEffect } from 'react';
import { IconContext } from "react-icons";
import { GoMarkGithub } from "react-icons/go";

function Project(props) {
    const {
        imgSrc,
        imgAlt,
        appTitle,
        appUrl,
        githubUrl,
        loadingSrc
    } = props;

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1500)
    })

    return(
        <div className="Project">
            <a className="img-link" href={appUrl} target="_blank" rel="noreferrer">
                {isLoading ?
                (<img 
                    src={require(`../../assets/icons/${loadingSrc}`)}
                    alt={imgAlt}
                />) : (
                <img 
                    src={require(`../../assets/images/${imgSrc}`)}
                    alt={imgAlt}
                />)}
            </a>
            <a className="app-title" href={appUrl} target="_blank" rel="noreferrer">
                {appTitle}
            </a>
            <br />
            <a className="link" href={githubUrl} target="_blank" rel="noreferrer">
                <IconContext.Provider value={{ size: '1em' }}>
                    <GoMarkGithub />
                </IconContext.Provider>
                <span className="indent-xs">View</span> GitHub Repository
            </a>
        </div>
    );
};

export default Project;