import React from 'react';

import { Link } from 'react-router-dom';

import './navbar-container.styles.scss';

const NavbarContainer: React.FC = () => {
    return (
        <nav className='navbar-container'>
            <Link to='/' className='link navbar__link'>Home</Link>
            <Link to='/training' className='link navbar__link'>What We Do</Link>
            <Link to='/training' className='link navbar__link'>Training</Link>
            <Link to='/contact' className='link navbar__link'>Contact Us</Link>
        </nav>
    )
}

export default NavbarContainer;