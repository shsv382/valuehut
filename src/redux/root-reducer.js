import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appReducer from './app/app.reducers';
import contentReducer from './content/content.reducers';
// import cartReducer from './cart/cart.reducer';
import servicesReducer from './services/services.reducer';

const rootReducer = combineReducers({
    app: appReducer,
    content: contentReducer,
    cart: null,
    services: servicesReducer
})

export default rootReducer;