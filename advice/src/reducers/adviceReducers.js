import { GET_ADVICE_LOADING, GET_ADVICE_SUCCESS, GET_ADVICE_FAIL } from './../actions/adviceActions';

const initialState = {
    advice:'',
    isGetting: false,
    
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(GET_ADVICE_LOADING):
        return({
            ...state,
            isGetting:false
        });
        case(GET_ADVICE_SUCCESS):
        return({
            ...state,
            advice: action.payload,
            isGetting: false
        });
        case(GET_ADVICE_FAIL):
        return({
            ...state,
            isGetting: false
        });
        default:
            return state;
    }
};