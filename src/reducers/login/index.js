const initialState = {
    userAuthentication: null
};

const login = (state = initialState, action) => {
    switch (action.type) {
        case 'VALIDATE_USER':
            return {
                ...state,
                userAuthentication: action.payload
            };
        default:
            return {
                ...state
            };
    }
};

export default login;