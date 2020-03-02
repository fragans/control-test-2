import Vue from 'vue'
import VueRouter from 'vue-router'
// import auth from './modules/auth'
// import store from '../store'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

// console.log(window.login)

const routes = [{
        path: '/',
        name: 'Home',
        meta: {
            title: 'Login Admin'
        },
        component: Home
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {
            title: 'Dashboard Kasir',
            requiresAuth: true
        },
        component: () =>
            import ('../views/Dashboard.vue'),


    }
]

const router = new VueRouter({
    routes
})


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!localStorage.getItem('login')) {
            next({
                path: '/',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
})


export default router