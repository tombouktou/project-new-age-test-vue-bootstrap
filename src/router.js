import { createRouter, createWebHistory } from 'vue-router';
import ProductListView from './components/ProductListView.vue';
import ProductDetailView from './components/ProductDetailView.vue';

const routes = [
  { path: '/', component: ProductListView },
  { path: '/product/:id', component: ProductDetailView, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
