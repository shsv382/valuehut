import { data } from "../../data";

const initialState = { ...data };

const dataReducer = (state=initialState, action={}) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default dataReducer;