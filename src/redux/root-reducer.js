import { data } from "../data";

const initialState = { ...data };

export const rootReducer = (state=initialState, action={}) => {
    switch(action.type) {
        default:
            return state;
    }
}