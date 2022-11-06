import React from 'react';
import { authClient } from 'api';
import authReducer from './auth-reducer';
import { AuthContext } from './auth-context';

const initialState = {
    loading: false,
    user: null,
    isAuthenticated: false,
    error: null
};

export function AuthProvider(props) {
    const { children } = props;
    const [state, dispatch] = React.useReducer(authReducer, initialState);

    const getUser = React.useCallback(async (slide) => {
        try {
            dispatch({ type: 'loading' });

            const result = await authClient.getUser(slide);

            dispatch({ type: 'loaded', payload: result.data });

        } catch (error) {
            dispatch({ type: 'error', payload: error });
        }
    }, []);

    React.useEffect(() => {
        getUser(false);
    }, [getUser]);

    const logout = React.useCallback(async () => {
        window.location = state.user?.find((claim) => claim.type === 'bff:logout_url')?.value;
    }, [state.user]);

    const extendSession = React.useCallback(async () => {
        try {
            await authClient.extendSession();
        } catch (error) {
            dispatch({ type: 'error', payload: error });
        }
    }, []);

    const authContext = React.useMemo(() => ({
        loading: state.loading,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        error: state.error,
        getUser,
        logout,
        extendSession
    }), [getUser, logout, extendSession, state]);

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    );
}
