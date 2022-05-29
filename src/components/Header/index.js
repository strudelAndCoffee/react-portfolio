// HEADER

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return(
        <header>
            <Link to='/'>
            <h1>
                <span className='color-2'><em>Stevie Trudell</em></span>
            </h1>
            </Link>
            <nav>
                <NavLink to='/about' className='nav-link' activeClassName='nav-link active'>About</NavLink>
                <NavLink to='/portfolio' className='nav-link' activeClassName='nav-link active'>Portfolio</NavLink>
                <NavLink to='/contact' className='nav-link' activeClassName='nav-link active'>Contact</NavLink>
                <NavLink to='/resume' className='nav-link' activeClassName='nav-link active'>Resume</NavLink>
            </nav>
        </header>
    );
};

export default Header;