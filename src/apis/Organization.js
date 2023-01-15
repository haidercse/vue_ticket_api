import { addOrganization } from "../stores/modules/organization/actions";
import Api from "./Api";

export default {
    getAllOrganization() {
        return Api.get('/organization');
    },
    addOrganization(data) {
        return Api.post('organization/create', data);
    }
}