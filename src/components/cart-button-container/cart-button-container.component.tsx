import React from 'react';
import './cart-button-container.styles.scss';

import { ReactComponent as Cart } from './basket_12.svg';

const CartButtonContainer: React.FC = () => {
    return (
        <div className='cart-button-container'>
            <Cart />
        </div>
    )
}

export default CartButtonContainer;