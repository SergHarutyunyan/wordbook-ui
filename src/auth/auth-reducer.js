const authReducer = (state, action) => {
    switch (action.type) {
    case 'loaded':
        return {
            ...state,
            user: action.payload,
            loading: false,
            isAuthenticated: true,
            error: undefined,
        };
    case 'loading':
        return {
            ...state,
            loading: true,
        };
    case 'error':
        return {
            ...state,
            loading: false,
            isAuthenticated: false,
            user: null,
            error: action.payload
        };
    default:
        return state;
    }
};

export default authReducer;
