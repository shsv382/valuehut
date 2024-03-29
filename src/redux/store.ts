import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';


export const store = createStore(rootReducer);

export default { store };

// -----   Without persisted store   ----- //
// import logger from 'redux-logger';

// const middlewares = [];

// if(process.env.NODE_ENV === 'development') {
//     middlewares.push(logger);
// }

// const store = createStore(rootReducer, applyMiddleware(...middlewares));
// export default { store };


// -----   With manually persisted store ----- //
// const saveToLocalStorage = (state: any) => {
//     try {
//       localStorage.setItem('state', JSON.stringify(state));
//     } catch (e) {
//       console.error(e);
//     }
// };

// const loadFromLocalStorage = () => {
//     try {
//         const stateStr = localStorage.getItem('state');
//         return stateStr ? JSON.parse(stateStr) : undefined;
//     } catch (e) {
//         console.error(e);
//         return undefined;
//     }
// };

// const persistedStore = loadFromLocalStorage();

// const store = createStore(rootReducer, persistedStore);

// store.subscribe(() => {
//     saveToLocalStorage(store.getState());
// });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch