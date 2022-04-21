import React from 'react';
import './about-page.styles.scss';
import { useAppSelector } from '../../redux/hooks';

const AboutPage:React.FC = () => {
    return (
        <div className="page about-page">
            <h1>About Us</h1>
        </div>
    )
}

export default AboutPage;