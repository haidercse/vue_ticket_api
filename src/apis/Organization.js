import Api from "./Api";

let token = JSON.parse(localStorage.getItem("user"));
let access_token = token.token;

export default {
    getAllOrganization() {
        return Api.get('/organization', {
            headers: {
                'Authorization': `Bearer ${access_token} `

            }
        });
    }
}