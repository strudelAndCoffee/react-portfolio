// FOOTER

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, regular } from '@fortawesome/fontawesome-svg-core/import.macro';

function Footer() {
    return(
        <footer>
            <div className="footer-left">
                <small><FontAwesomeIcon icon={regular('copyright')} />2022 Built with <FontAwesomeIcon icon={regular('heart')} /> by strudelAndCoffee</small>
                <br />
                
            </div>
            <div className="footer-right">
                <a href="https://github.com/strudelAndCoffee" target="_blank" rel="noreferrer" className="footer-link">
                    <FontAwesomeIcon icon={brands('github')} />
                </a>
                <a href="https://www.linkedin.com/in/stevie-trudell-atx/" target="_blank" rel="noreferrer" className="footer-link">
                    <FontAwesomeIcon icon={brands('linkedin')} />
                </a>
                <a href="mailto:strudelandcoffee@gmail.com" target="_blank" rel="noreferrer" className="footer-link">
                    <FontAwesomeIcon icon={regular('envelope')} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;