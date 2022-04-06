import React from 'react';
import { data } from '../../data';
import './footer.styles.scss';

const Footer: React.FC = () => {
    return (
        <footer>
            <h3>Contact Us Now:</h3>
            <p>Mail to <a className='link footer__link' href={`mailto:${data.pages.contact.email}`}>{data.pages.contact.email}</a></p>
            <p>Call <a className='link footer__link' href={`tel:${data.pages.contact.phone}`}>{data.pages.contact.phone}</a></p>
        </footer>
    )
}

export default Footer;