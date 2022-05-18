import React from 'react';
import './header.styles.scss';

import LogoContainer from '../logo-container/logo-container.component';
import NavbarContainer from '../navbar-container/navbar-container.component';
import CartButtonContainer from '../cart-button-container/cart-button-container.component';
import PopupMenuTraining from '../popup-menu-training/popup-menu-training.component';

const Header: React.FC = () => {
    return (
        <header>
            <div className="header-container" id="start">
                <LogoContainer imageURL='./logo/logo-primary.png' />
                <NavbarContainer />
                <PopupMenuTraining />
                <CartButtonContainer />
            </div>
        </header>
    )
}

export default Header;