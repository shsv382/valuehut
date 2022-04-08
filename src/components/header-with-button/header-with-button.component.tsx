import React from "react";
import './header-with-button.styles.scss';

import { Link } from 'react-router-dom';

interface HeaderWithButtonProps {
    header: string,
    link: string,
    href: string,
    otherProps?: any[]
}

const HeaderWithButton = ({ header, link, href, otherProps }: HeaderWithButtonProps) => {
    return (
        <div className="header-with-button">
            <h2 className="header-with-button__header">{header}</h2>
            <Link to={href} className="button button-secondary button-secondary-large">{link}</Link>
        </div>
    )
}

export default HeaderWithButton;