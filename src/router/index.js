import {createRouter, createWebHistory} from 'vue-router'


// COMPONENT for router
import About from '../views/About'
import Home from '../views/Home'


const routes = [
    {
        path: '/about',
        nama: 'About',
        component: About
    },
    {
        path: '/',
        nama: 'Home',
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;