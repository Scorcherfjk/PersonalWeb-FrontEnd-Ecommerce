import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/all-products',
    name: 'AllProducts',
    component: () => import('../views/AllProducts.vue')
  },
  {
    path: '/t-shirts',
    name: 'TShirts',
    component: () => import('../views/TShirts.vue')
  },
  {
    path: '/shoes',
    name: 'Shoes',
    component: () => import('../views/Shoes.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
