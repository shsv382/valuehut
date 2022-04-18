import React from 'react';
import './contact-data.styles.scss';

interface ContactDataTypes {
    address: string,
    email: string,
    phone: string | number
}

const ContactData: React.FC<ContactDataTypes> = ({ address, email, phone }) => {
    return (
        <ul className='contact-data'>
            <li><span className="contact-data__list__slash">/ </span>
                { address }
            </li>
            <li><span className="contact-data__list__slash">/ </span>
                <a className='link contact-data__link' href={`mailto:${email}`}>{email}</a>
            </li>
            <li><span className="contact-data__list__slash">/ </span>
                <a className='link contact-data__link' href={`tel:${phone}`}>{phone}</a>
            </li>
        </ul>
    )
}

export default ContactData;