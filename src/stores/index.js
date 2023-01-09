import { createStore } from 'vuex'
import registration from './modules/registration'
import success from './modules/success'
import errors from './modules/errors'
import login from './modules/login'
import organization from './modules/organization'

// Create a new store instance.
const store = createStore({
    modules: {
        registration,
        success,
        errors,
        login,
        organization
    }


});

export default store;