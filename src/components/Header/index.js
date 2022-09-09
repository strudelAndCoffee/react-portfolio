// HEADER

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return(
        <header>
            <Link to='/'>
                <h1>
                    Stephen Trudell
                </h1>
            </Link>
            <nav>
                <NavLink to='/portfolio' className='nav-link' activeClassName='nav-link active'>Portfolio</NavLink>
                <NavLink to='/about' className='nav-link' activeClassName='nav-link active'>About</NavLink>
                <NavLink to='/resume' className='nav-link' activeClassName='nav-link active'>Resume</NavLink>
                <NavLink to='/community' className='nav-link' activeClassName='nav-link active'>Community</NavLink>
                <NavLink to='/contact' className='nav-link' activeClassName='nav-link active'>Contact</NavLink>
            </nav>
        </header>
    );
};

export default Header;