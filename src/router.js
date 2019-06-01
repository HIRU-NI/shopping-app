import Vue from 'vue'
import Router from 'vue-router'
import Catalog from '@/views/Catalog.vue'
import Cart from '@/views/Cart.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BABEL_URL,
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: Catalog
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        }
    ]
})