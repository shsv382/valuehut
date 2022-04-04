import React from 'react';

import './navbar-container.styles.scss';

const NavbarContainer: React.FC = () => {
    return (
        <nav className='navbar-container'>
            <span>Link 1</span>
            <span>Link 2</span>
            <span>Link 3</span>
        </nav>
    )
}

export default NavbarContainer;