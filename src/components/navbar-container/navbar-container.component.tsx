import React from 'react';

import { Link } from 'react-router-dom';

import './navbar-container.styles.scss';

const NavbarContainer: React.FC = () => {
    return (
        <nav className='navbar-container'>
            <Link to='/what-we-do' className='navbar__link'>What We Do</Link>
            <Link to='/contact' className='navbar__link'>Contact Us</Link>
        </nav>
    )
}

export default NavbarContainer;