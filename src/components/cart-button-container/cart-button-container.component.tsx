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
        <div className='cart-button-container' data-fc-id="minicart" >
            <a href={`https://valuehut.foxycart.com/cart?cart=view`}>
                <Cart />
                <span className="cart-quantity" data-fc-id="minicart-quantity">0</span>
                <span className="cart-total">$ <span data-fc-id="minicart-order-total">0</span></span>
            </a>
            {/* {
                !hidden && <CartDropdown /> 
            } */}
        </div>
    )
}

export default CartButtonContainer;