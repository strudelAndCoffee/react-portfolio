// FOOTER

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, regular } from '@fortawesome/fontawesome-svg-core/import.macro';

function Footer() {
    return(
        <footer>
            <div className="footer-left">
                <FontAwesomeIcon icon={regular('copyright')} />2022 Built with <FontAwesomeIcon icon={regular('heart')} /> by strudelAndCoffee
                <br />
                Photo by <a href="https://unsplash.com/@csfoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Carlos Alfonso</a> on <a href="https://unsplash.com/s/photos/austin-texas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
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