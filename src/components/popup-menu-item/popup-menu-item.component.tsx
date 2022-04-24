import React from 'react';
import './popup-menu-item.styles.scss';
import { Link } from 'react-router-dom';

interface PopupMenuItemTypes {
    label: string,
    href: string,
    children?: any
}

const PopupMenuItem: React.FC<PopupMenuItemTypes> = ({ label, href }) => {
    return (
        <Link className="popup-menu-item link" to={ href }>{ label }</Link>
    )
}

export default PopupMenuItem;