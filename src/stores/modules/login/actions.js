import login from '../../../apis/Login';
import router from '../../../routes/index.js';

export const loginUser = ({
    commit
}, data) => {
    login.store(data)
        .then(response => {
            console.log(response.data)
            if (response.data.status == true) {
                commit("LOGIN_USER", response.data.data);
                commit("SET_SUCCESS", response.data.message);
                router.push('/');
                localStorage.setItem("user", JSON.stringify(response.data));
            }
        }).catch(error => {
            commit("SET_ERRORS", error.response.data.errors);
        });
}