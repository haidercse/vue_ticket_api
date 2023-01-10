import Api from "./Api";

export default {
    getAllOrganization() {
        return Api.get('/organization');
    }
}