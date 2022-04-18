import React from 'react';
import './footer.styles.scss';
import LogoContainer from '../logo-container/logo-container.component';

interface FooterTypes {
    email: string, 
    phone: string | number, 
    address?: string, 
    howto?: string 
}

const Footer: React.FC<FooterTypes> = ({ email, phone, address, howto }) => {
    return (
        <footer>
            <div className='footer-container'>
                <LogoContainer imageURL='./logo/logo-primary-bg-black.png' />
                <h3>Contact Us Now:</h3>
                <p>Mail to <a className='link footer__link' href={`mailto:${email}`}>{email}</a></p>
                <p>Call <a className='link footer__link' href={`tel:${phone}`}>{phone}</a></p>
            </div>
        </footer>
    )
}

export default Footer;