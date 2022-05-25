import { training } from "../../data/training";

const initialState = { ...training };

const servicesReducer = (state=initialState, action={}) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default servicesReducer;