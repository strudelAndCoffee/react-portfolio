// PORTFOLIO

import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
    // app data array
    const [apps] = useState([
        {
            imgSrc: 'travel-diary.png',
            imgAlt: 'homepage for travel diary.',
            appTitle: 'Travel.Diary',
            appUrl: 'https://afternoon-harbor-62644.herokuapp.com/',
            githubUrl: 'https://github.com/strudelAndCoffee/travel-log-dashboard',
            loadingSrc: 'GitHub-Mark-Light-32px.png'
        },
        {
            imgSrc: 'dev-dash.png',
            imgAlt: 'homepage for dev dash.',
            appTitle: 'Dev Dash',
            appUrl: 'https://cryptic-peak-17894.herokuapp.com/',
            githubUrl: 'https://github.com/strudelAndCoffee/dev-dash',
            loadingSrc: 'GitHub-Mark-Light-32px.png'
        },
        {
            imgSrc: 'git-it-done.png',
            imgAlt: 'homepage for git it done.',
            appTitle: 'Git It Done!',
            appUrl: 'https://strudelandcoffee.github.io/git-it-done/',
            githubUrl: 'https://github.com/strudelAndCoffee/git-it-done',
            loadingSrc: 'GitHub-Mark-Light-32px.png'
        },
        {
            imgSrc: 'spacex.png',
            imgAlt: 'homepage for SpaceX launch info dashboard.',
            appTitle: 'SpaceX Launch Info',
            appUrl: 'https://strudelandcoffee.github.io/group-project/',
            githubUrl: 'https://github.com/strudelAndCoffee/group-project',
            loadingSrc: 'GitHub-Mark-Light-32px.png'
        },
        {
            imgSrc: 'note-taker.png',
            imgAlt: 'homepage for note taker app.',
            appTitle: 'Note Taker App',
            appUrl: 'https://do-ly-noted.herokuapp.com/',
            githubUrl: 'https://github.com/strudelAndCoffee/do-ly-noted',
            loadingSrc: 'GitHub-Mark-Light-32px.png'
        },
        {
            imgSrc: 'code-quiz.png',
            imgAlt: 'homepage for do you even code quiz app',
            appTitle: 'Do You Even Code? Quiz',
            appUrl: 'https://strudelandcoffee.github.io/do-you-even-code-quiz/',
            githubUrl: 'https://github.com/strudelAndCoffee/do-you-even-code-quiz',
            loadingSrc: 'GitHub-Mark-Light-32px.png'
        }
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
                    key={app.appTitle}
                    loadingSrc={app.loadingSrc}
                ></Project>
            ))}
        </section>
    );
};

export default Portfolio;