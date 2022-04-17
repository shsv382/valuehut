import { training } from "../../training";

const initialState = { ...training };

const trainingReducer = (state=initialState, action={}) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default trainingReducer;