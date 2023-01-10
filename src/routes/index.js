import {
    createWebHistory,
    createRouter
} from "vue-router";

import Home from '../pages/Home.vue'
import loginRegistration from "./loginRegistration";
import organization from './organization'
import store from '../stores/index'
import OrganizationCreate from '../components/organization/OrganizationCreate.vue'
import OrganizationList from '../components/organization/OrganizationList.vue'
import Registration from '../pages/Registration.vue'
import Login from '../pages/Login.vue'

const routes = [{
    path: '/',
    name: "Home",
    component: Home,
    meta: {
        requiresAuth: true
    }

},
{
    path: '/registration',
    name: "Registration",
    component: Registration,
    meta: {
        visited: true
    }

},
{
    path: '/login',
    name: "Login",
    component: Login,
    meta: {
        visited: true
    }


}, {
    path: '/organization-create',
    name: "OrganizationCreate",
    component: OrganizationCreate,
    meta: {
        requiresAuth: true
    }

}, {
    path: '/organization',
    name: "OrganizationList",
    component: OrganizationList,
    meta: {
        requiresAuth: true
    }

},
    // ...loginRegistration,
    // ...organization

]



const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.loggedIn) {
            next({ name: 'Login' })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.visited)) {
        if (store.getters.loggedIn) {
            next({ name: 'Home' })
        } else {
            next()
        }
    }
    else {
        next()
    }


});

export default router;

// Now the app has started!