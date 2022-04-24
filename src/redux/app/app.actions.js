import AppActionTypes from "./app.types";

export const changeRegion = (region) => ({
    type: AppActionTypes.CHANGE_REGION,
    payload: region
})