import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import '../assets/css/footer.css'

function Footer(props) {
    return (
        <div className='footer-container'>
            <p className='footer-text'>&copy; Copyright 2021, <a className='footer-link' href="mailto:jmjabor@gmail.com">Joshua Michael Jabor</a></p>
            <div className='footer-icon-container'>
                <a href='https://www.linkedin.com/in/joshua-michael-jabor/' target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} color='white' size='lg' className='footer-icon' />
                </a>
                <a href='https://github.com/josh1506' target="_blank">
                    <FontAwesomeIcon icon={faGithub} color='white' size='lg' className='footer-icon' />
                </a>
            </div>
        </div>
    );
}

export default Footer;