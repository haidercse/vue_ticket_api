import Api from "./Api";

export default {
    store(data) {
        return Api.post('/auth/login/', data);
    }
}