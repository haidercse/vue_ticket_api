import Registration from '../pages/Registration.vue'
import Login from '../pages/Login.vue'
import Home from '../pages/Home.vue'

export default [{
        path: '/registration',
        name: "Registration",
        component: Registration,
       
    },
    {
        path: '/login',
        name: "Login",
        component: Login,
        
    },
]