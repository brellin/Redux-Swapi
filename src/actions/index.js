import axios from 'axios';
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const fetch = () => dispatch => {
    dispatch({ type: FETCHING })
    axios
        .get(`https://swapi.co/api/people/`)
        .then(res => {
            dispatch({ type: SUCCESS, payload: res.data.results })
        })
        .catch(err => dispatch({ type: FAILURE, payload: err }))
}
