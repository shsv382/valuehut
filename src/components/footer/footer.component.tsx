import React from 'react';
import './footer.styles.scss';
import { useAppSelector } from '../../redux/hooks';

const Footer: React.FC = () => {
    const { email, phone, address, howto } = { ...useAppSelector((state) => (state.data.pages.contact)) };
    return (
        <footer>
            <div className='footer-container'>
                <h3>Contact Us Now:</h3>
                <p>Mail to <a className='link footer__link' href={`mailto:${email}`}>{email}</a></p>
                <p>Call <a className='link footer__link' href={`tel:${phone}`}>{phone}</a></p>
            </div>
        </footer>
    )
}

export default Footer;