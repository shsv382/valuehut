import { combineReducers } from 'redux';

import dataReducer from './data/data.reducers';
import cartReducer from './cart/cart.reducer';

const rootReducer = combineReducers({
    data: dataReducer,
    cart: cartReducer,
})

export default rootReducer;