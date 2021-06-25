import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/product/:slug',
    name: 'Product',
    component: () => import('@/views/Product.vue'),
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('@/views/Catalog.vue'),
  },
  {
    path: '/catalog/:slug',
    name: 'Catalog',
    component: () => import('@/views/Catalog.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/Cart.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router