import login from '../../../apis/Login';
import router from '../../../routes/index.js';

export const loginUser = ({
    commit
}, data) => {
    login.store(data)
        .then(response => {
            if (response.data.status == true) {
                commit("LOGIN_USER", response.data);
                commit("SET_SUCCESS", response.data.message);

                router.push({ path: '/' });

                localStorage.setItem("user", JSON.stringify(response.data.token));
            }
        }).catch(error => {
            commit("SET_ERRORS", error.response.data.errors);
        });
}

export const getAuthUser = (commit) => {
    login.getAuthUser()
        .then((response) => {
            if (response.data.status == true) {
                console.log(response.data);
                commit('SET_AUTH_USER', response.data.data)
            }

        }).catch(error => {
            commit("SET_ERRORS", error.response.data.errors);
        });

}