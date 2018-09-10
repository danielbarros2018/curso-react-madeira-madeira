import {CHANGE_CARNINHA} from "./types";

var INITIAL_STATE = {
    carninha: "Picanha",
    teste: "123"
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_CARNINHA:
            return {
                ...state,
                carninha: action.payload
            }
        default:
            return state
    }
}