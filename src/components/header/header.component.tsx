import React from 'react';
import './header.styles.scss';

import LogoContainer from '../logo-container/logo-container.component';

const Header: React.FC = () => {
    return (
        <header>
            <LogoContainer />
            {/* <NavbarContainer />
            <CartButtonContainer /> */}
        </header>
    )
}

export default Header;