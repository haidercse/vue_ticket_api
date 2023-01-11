export default {
    token: JSON.parse(localStorage.getItem("user")) || null,
    user: [],
    authUser: null,
}