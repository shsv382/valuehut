import React from 'react';
import './header.styles.scss';

import LogoContainer from '../logo-container/logo-container.component';
import NavbarContainer from '../navbar-container/navbar-container.component';
import CartButtonContainer from '../cart-button-container/cart-button-container.component';

const Header: React.FC = () => {
    return (
        <header>
            <div className="header-container">
                <LogoContainer />
                <NavbarContainer />
                <CartButtonContainer />
            </div>
        </header>
    )
}

export default Header;