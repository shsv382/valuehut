import React from 'react';
import './contact-page.styles.scss';

import { useAppSelector } from '../../redux/hooks';

import ContactData from '../../components/contact-data/contact-data.component';

const ContactPage: React.FC = () => {
    const { email, phone, address, howto } = { ...useAppSelector((state) => (state.pages.contact)) };
    return (
        <div className='page contact-page appearancable'>
            <div className='how-to-contact'>
                <h1>How to contact us</h1>
                <p>{ howto }</p>
            </div>
            <div className='contact-data-block'>
                <ContactData 
                    email={email}
                    phone={phone}
                    address={address}
                />
            </div>
        </div>
    )
};           

export default ContactPage;