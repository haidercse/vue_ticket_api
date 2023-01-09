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