import { combineReducers } from 'redux';

import contentReducer from './content/content.reducers';
import cartReducer from './cart/cart.reducer';
import trainingReducer from './training/training.reducer';

const rootReducer = combineReducers({
    content: contentReducer,
    cart: cartReducer,
    training: trainingReducer
})

export default rootReducer;