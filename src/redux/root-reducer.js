import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appReducer from './app/app.reducers';
import contentReducer from './content/content.reducers';
// import cartReducer from './cart/cart.reducer';
import trainingReducer from './training/training.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    app: appReducer,
    content: contentReducer,
    cart: null,
    training: trainingReducer
})

export default persistReducer(persistConfig, rootReducer);