import React from 'react';
import './logo-container.styles.scss';

import { Link } from 'react-router-dom';

const LogoContainer: React.FC = () => {
    return (
        <div className='logo-container'>
            <Link to='/'>
                <img src='./dacht-logo-full.png' />
            </Link>
        </div>
    )
}

export default LogoContainer;