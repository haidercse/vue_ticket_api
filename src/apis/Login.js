import Api from "./Api";
// const access_token = localStorage.getItem("user");

export default {
    store(data) {
        console.log('data' + data);
        return Api.post('/auth/login/', data);
    },

    getAuthUser() {
        return Api.get('/user/auth');
    }
}