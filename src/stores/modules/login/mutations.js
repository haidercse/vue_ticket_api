export const LOGIN_USER = (state, userData) => {
    state.user = userData;
    state.isAuthenticate = true
}