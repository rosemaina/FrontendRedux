export const getAuthToken = () => {
    const authString = localStorage.getItem('token');
    if (authString) {
        return authString;
    }
    return null;
};

export const isAuthenticated = () => {
    return getAuthToken() != null;
};