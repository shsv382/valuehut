import { training } from "../../data/training";
import { coaching } from "../../data/coaching";

const initialState = { ...training, ...coaching };

const servicesReducer = (state=initialState, action={}) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default servicesReducer;