import React from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { Link } from "react-router-dom";

import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const cartItems = useAppSelector((state) => state.cart.cartItems);
    const dispatch = useAppDispatch();

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                { 
                    cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                    ) : (
                    <span className='empty-message'>Your cart is empty</span>
                    )
                }
            </div>
            <Link to="#" className="button button-primary button-primary-small">GO TO CHECKOUT</Link>
        </div>
    )
}

export default CartDropdown;