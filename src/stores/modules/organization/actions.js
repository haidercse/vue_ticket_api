import organization from '../../../apis/Organization';

export const getOrganization = ({
    commit
}) => {
    organization.getAllOrganization()
        .then(response => {
            if (response.data.status == true) {
                commit("SET_ORGANIZATION", response.data.data);
                setTimeout(() => {
                    $("#dataTable").DataTable();
                }, 1000);
            }
        }).catch(error => {
            console.log(error.response.data.message);
        });
}

export const addOrganization = ({commit},data)=>{
    organization.addOrganization(data)
    .then(response => {
        if (response.data.status == true) {
            commit("SET_ADD_ORGANIZATION", response.data.data);
            commit("SET_SUCCESS", response.data.message);
        }
    }).catch(error => {
        commit("SET_ERRORS", error.response.data.errors);
    });
}
