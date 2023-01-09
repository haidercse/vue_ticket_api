import Registration from '../pages/Registration.vue'
import Login from '../pages/Login.vue'

export default [{
        path: '/registration',
        name: "Registration",
        component: Registration,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem('user'))
                next({ name: 'Home' })
            else next()
        }
    },
    {
        path: '/login',
        name: "Login",
        component: Login,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem('user'))
                next({ name: 'Home' })
            else next()
        }
    },
]