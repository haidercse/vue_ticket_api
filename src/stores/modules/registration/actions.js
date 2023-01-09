import registration from '../../../apis/Rgistration.js';
import router from '../../../routes/index.js';

export const addUser = ({
    commit
}, data) => {
    registration.store(data)
        .then(response => {
            if (response.data.status == true) {
                commit("SET_USER", response.data.data);
                commit("SET_SUCCESS", response.data.message);
                router.push('/');
            }
        }).catch(error => {
            commit("SET_ERRORS", error.response.data.errors);
        });
}