// HEADER

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return(
        <header>
            <Link to='/react-portfolio/'>
            <h1>
                Stephen Trudell
            </h1>
            </Link>
            <nav>
                <NavLink to='/react-portfolio/portfolio' className='nav-link' activeClassName='nav-link active'>Portfolio</NavLink>
                <NavLink to='/react-portfolio/about' className='nav-link' activeClassName='nav-link active'>About</NavLink>
                <NavLink to='/react-portfolio/contact' className='nav-link' activeClassName='nav-link active'>Contact</NavLink>
                <NavLink to='/react-portfolio/resume' className='nav-link' activeClassName='nav-link active'>Resume</NavLink>
            </nav>
        </header>
    );
};

export default Header;