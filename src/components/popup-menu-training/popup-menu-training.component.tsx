import React from 'react';

import { useAppSelector } from '../../redux/hooks';

import PopupMenu from '../popup-menu/popup-menu.component';
import PopupMenuItem from '../popup-menu-item/popup-menu-item.component';

const PopupMenuTraining: React.FC = () => {
    const showPopupMenuTraining = useAppSelector(state => state.app.showPopupMenuTraining)
    return (
        <PopupMenu hidden={showPopupMenuTraining}>
            <PopupMenuItem label="Consultancy" href="/training" />
            <PopupMenuItem label="Coaching" href="/training" />
            <PopupMenuItem label="Training" href="/training" />
        </PopupMenu>
    )
}

export default PopupMenuTraining;
