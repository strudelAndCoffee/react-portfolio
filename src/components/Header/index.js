// HEADER

import React from 'react';

function Header({ currentPage, pageChangeHandler }) {
    return(
        <header>
            <h1>
                <span className="color-2"><em>Stevie Trudell</em></span>
            </h1>
            <nav>
                <a href='#About'
                    onClick={() => pageChangeHandler('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link' }>About</a>
                <a href='#Portfolio'
                    onClick={() => pageChangeHandler('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link' }>Portfolio</a>
                <a href='#Contact'
                    onClick={() => pageChangeHandler('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link' }>Contact</a>
                <a href='#Resume' 
                    onClick={() => pageChangeHandler('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link' }>Resume</a>
            </nav>
        </header>
    );
};

export default Header;