import React from 'react';
import './logo-container.styles.scss';

import { Link } from 'react-router-dom';

interface LogoTypes {
    imageURL: string,
    children?: any
}

const LogoContainer: React.FC<LogoTypes> = ({ imageURL }) => {
    return (
        <div className='logo-container'>
            <Link to='/'>
                <img src={ imageURL } />
            </Link>
        </div>
    )
}

export default LogoContainer;