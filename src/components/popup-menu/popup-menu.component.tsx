import React from 'react';
import './popup-menu.styles.scss';

import { useAppDispatch } from '../../redux/hooks';
import { showPopupMenuTraining } from '../../redux/app/app.actions';

interface PopupMenuTypes {
    hidden: boolean,
    children?: any
}

const PopupMenu: React.FC<PopupMenuTypes> = ({ hidden, children }) => {
    const dispatch = useAppDispatch();
    return (
        <div className={`${hidden ? "hidden" : ""} popup-menu`} onClick={()=>dispatch(showPopupMenuTraining())}>
            { children }
        </div>
    )
}

export default PopupMenu;