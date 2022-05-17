import React from 'react';
import './cart-button-container.styles.scss';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Cart } from './basket_12.svg';

const CartButtonContainer: React.FC = () => {
    // const hidden = useAppSelector((state) => state.cart.hidden);
    const dispatch = useAppDispatch();
    const handleClick = () => {
        // dispatch(toggleCartHidden());
    }
    return (
        <div className='cart-button-container'>
            <a href={`https://valuehut.foxycart.com/cart?cart=view`}>
                <Cart />
            </a>
            {/* {
                !hidden && <CartDropdown /> 
            } */}
        </div>
    )
}

export default CartButtonContainer;