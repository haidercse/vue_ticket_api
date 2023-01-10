export const LOGIN_USER = (state, userData) => {
    state.user = userData;
    state.token = userData.token;

}

export const SET_AUTH_USER = (state, authUserData) => {
    state.authUser = authUserData;
}