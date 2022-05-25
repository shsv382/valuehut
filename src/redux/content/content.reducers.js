import { content } from "../../data/content";

const initialState = { ...content };

const contentReducer = (state=initialState, action={}) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default contentReducer;