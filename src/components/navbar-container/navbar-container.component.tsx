import React from 'react';
import PopupMenuTraining from '../popup-menu-training/popup-menu-training.component';

import { useAppDispatch } from '../../redux/hooks';
import { showPopupMenuTraining } from '../../redux/app/app.actions';

import { Link } from 'react-router-dom';
import './navbar-container.styles.scss';

const NavbarContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    return (
        <nav className='navbar-container'>
            <Link to='/' className='link navbar__link navbar__home-link'>Home</Link>
            {/* <Link to='/training' className='link navbar__link'>What We Do</Link> */}
            <span onClick={()=>dispatch(showPopupMenuTraining())} className='popup-menu-item link navbar__link navbar__what-we-do'>
                <span className="navbar__what-we-do__placeholder">What We Do</span>
                <PopupMenuTraining classname="popup-menu-training" />
            </span>
            <Link to='/about' className='link navbar__link'>About Us</Link>
            <Link to='/contact' className='link navbar__link'>Contact Us</Link>
        </nav>
    )
}

export default NavbarContainer;