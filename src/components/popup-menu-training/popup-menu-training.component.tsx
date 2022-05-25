import React from 'react';

import { useAppSelector } from '../../redux/hooks';

import PopupMenu from '../popup-menu/popup-menu.component';
import PopupMenuItem from '../popup-menu-item/popup-menu-item.component';

interface PopupMenuTrainingTypes {
    classname?: string
}

const PopupMenuTraining: React.FC<PopupMenuTrainingTypes> = ({ classname }) => {
    const showPopupMenuTraining = useAppSelector(state => state.app.showPopupMenuTraining)
    return (
        <PopupMenu classname={ classname } hidden={showPopupMenuTraining}>
            <PopupMenuItem label="What We Do" href="/services" />
            <PopupMenuItem label="Consultancy" href="/consultancy" />
            <PopupMenuItem label="Coaching" href="/coaching" />
            <PopupMenuItem label="Training" href="/training" />
        </PopupMenu>
    )
}

export default PopupMenuTraining;
