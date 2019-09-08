import RestClient from '../../utils/RestClient';
import { BASE_URL } from '../../utils/Constants';

export function userAuthenticated(status) {
    return {
        type: 'VALIDATE_USER',
        payload: status
    };
}

export function userValidation(userCredentials) {
    return dispatch => {
        RestClient.get(BASE_URL).then(() => {
            // verify user cridentials
            const status =
                userCredentials.username === 'admin' && userCredentials.password === 'admin'
                    ? 'success'
                    : 'fail';
            dispatch(userAuthenticated(status));
        });
    };
}

export default userValidation;
