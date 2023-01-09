import {
    createWebHistory,
    createRouter
} from "vue-router";

import Home from '../pages/Home.vue'
import loginRegistration from "./loginRegistration";
import organization from './organization'

const routes = [{
        path: '/',
        name: "Home",
        component: Home,
        beforeEnter: (to, from, next) => {
            if (!localStorage.getItem('user'))
                next({ name: 'Login' })
            else next()
        }

    },
    ...loginRegistration,
    ...organization

]


const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
});



export default router;

// Now the app has started!