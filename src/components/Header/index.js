// HEADER

import React from 'react';

function Header({ currentPage, pageChangeHandler }) {
    return(
        <header>
            <h1>
                <a href='/'>
                    Stevie Trudell
                </a>
            </h1>
            <nav>
                <a href="#About"
                    onClick={() => pageChangeHandler('About')}
                    className="nav-link">About</a>
                <a href="#Portfolio"
                    onClick={() => pageChangeHandler('Portfolio')}
                    className="nav-link">Portfolio</a>
                <a href="#Contact"
                    onClick={() => pageChangeHandler('Contact')}
                    className="nav-link">Contact</a>
                <a href="#Resume" 
                    onClick={() => pageChangeHandler('Resume')}
                    className="nav-link">Resume</a>
            </nav>
        </header>
    );
};

export default Header;