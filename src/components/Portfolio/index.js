// PORTFOLIO

import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
    // app data array
    const [apps] = useState([
        {
            imgSrc: '/assets/images/travel-diary.png',
            imgAlt: 'homepage for travel diary',
            appTitle: 'Travel.Diary',
            appUrl: 'https://afternoon-harbor-62644.herokuapp.com/',
            githubUrl: 'https://github.com/strudelAndCoffee/travel-log-dashboard'
        }
        // {
        //     imgSrc: '../../assets/images/',
        //     imgAlt: 'alt text',
        //     appTitle: 'App 2',
        //     appUrl: '',
        //     githubUrl: ''
        // },
        // {
        //     imgSrc: '../../assets/images/',
        //     imgAlt: 'alt text',
        //     appTitle: 'App 3',
        //     appUrl: '',
        //     githubUrl: ''
        // },
        // {
        //     imgSrc: '../../assets/images/',
        //     imgAlt: 'alt text',
        //     appTitle: 'App 4',
        //     appUrl: '',
        //     githubUrl: ''
        // },
        // {
        //     imgSrc: '../../assets/images/',
        //     imgAlt: 'alt text',
        //     appTitle: 'App 5',
        //     appUrl: '',
        //     githubUrl: ''
        // },
        // {
        //     imgSrc: '../../assets/images/',
        //     imgAlt: 'alt text',
        //     appTitle: 'App 6',
        //     appUrl: '',
        //     githubUrl: ''
        // }
    ]);

    return(
        <section className="Portfolio">
            {apps.map(app => (
                <Project
                    imgSrc={app.imgSrc}
                    imgAlt={app.imgAlt}
                    appTitle={app.appTitle}
                    appUrl={app.appUrl}
                    githubUrl={app.githubUrl}
                ></Project>
            ))}
        </section>
    );
};

export default Portfolio;