import { training } from "../../data/training";
import { coaching } from "../../data/coaching";
import { consultancy } from "../../data/consultancy";

const initialState = { ...training, ...coaching, ...consultancy };

const servicesReducer = (state=initialState, action={}) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default servicesReducer;