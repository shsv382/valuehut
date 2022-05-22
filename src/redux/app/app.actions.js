import AppActionTypes from "./app.types";

export const changeRegion = (region) => ({
    type: AppActionTypes.CHANGE_REGION,
    payload: region
})

export const showPopupMenuTraining = () => ({
    type: AppActionTypes.SHOW_POPUP_MENU_TRAINING
})

export const toggleModalHidden = () => ({
    type: AppActionTypes.TOGGLE_MODAL_HIDDEN
})