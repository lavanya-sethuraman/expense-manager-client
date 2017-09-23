import {API_BASE_URL} from '../config';
//import {normalizeResponseErrors} from './utils';

export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        // .then(res => normalizeResponseErrors(res))
        .then(res => console.log(res.json()))
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                return (message,location);
            }
        });
};
