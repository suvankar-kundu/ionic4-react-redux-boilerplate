import { combineReducers } from 'redux';
import LoginReducer from './login';

const locale = (state = { locale: 'en' }, action) => {
    switch (action.type) {
        case 'UPDATE_LOCALE':
            return {
                ...state,
                locale: action.data
            };
        default:
            return state;
    }
};
export default combineReducers({
    locale,
    UserValidate: LoginReducer
});