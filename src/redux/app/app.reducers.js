import AppActionTypes from './app.types.js';

const INITIAL_STATE = {
    modal_hidden: false,
    region: 'United Kingdom',
    showPopupMenuTraining: true
}

const appReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case AppActionTypes.CHANGE_REGION:
            return {
                ...state,
                region: action.payload
            }
        case AppActionTypes.TOGGLE_MODAL_HIDDEN:
            return {
                ...state,
                modal_hidden: !state.modal_hidden
            }
        case AppActionTypes.SHOW_POPUP_MENU_TRAINING:
            return {
                ...state,
                showPopupMenuTraining: !state.showPopupMenuTraining
            }
        default:
            return state;
    }
}

export default appReducer;