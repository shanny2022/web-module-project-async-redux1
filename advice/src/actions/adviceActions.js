import axios from 'axios';

export const GET_ADVICE_LOADING = 'GET_ADVICE_LOADING';
export const GET_ADVICE_SUCCESS = 'GET_ADVICE_SUCCESS';
export const  GET_ADVICE_FAIL = 'GET_ADVICE_FAIL';

export const getAdvice = () => {
    return dispatch => {
        dispatch({type:GET_ADVICE_LOADING});

        axios
        .get('https://api.adviceslip.com/advice')
        .then(res => {
            console.log(res);
            dispatch({type:GET_ADVICE_SUCCESS, payload: res.data.slip.advice})
        })
        .catch(err => {
            console.log(err);
        })
    }
}