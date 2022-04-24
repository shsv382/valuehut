import AppActionTypes from './app.types.js';

const INITIAL_STATE = {
    region: 'uk'
}

const appReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case AppActionTypes.CHANGE_REGION:
            return {
                ...state,
                region: action.payload
            }
        default:
            return state;
    }
}

export default appReducer;