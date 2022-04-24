import { combineReducers } from 'redux';

import appReducer from './app/app.reducers';
import contentReducer from './content/content.reducers';
import cartReducer from './cart/cart.reducer';
import trainingReducer from './training/training.reducer';

const rootReducer = combineReducers({
    app: appReducer,
    content: contentReducer,
    cart: cartReducer,
    training: trainingReducer
})

export default rootReducer;