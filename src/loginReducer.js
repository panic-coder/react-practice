import { INCREMENT_COUNT, DECREMENT_COUNT, DATA_TRANSFER } from "./constants/actionTypes.js";

export default (
    state = {
        number: 1,
        data: ""
    }, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                // number: number + 1
                number: state.number + 1
            }
        case DECREMENT_COUNT:
            return {
                ...state,
                number: state.number - 1
            }
        case DATA_TRANSFER:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}