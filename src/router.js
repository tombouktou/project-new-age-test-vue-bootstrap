import { createRouter, createWebHistory } from 'vue-router';
import ProductListView from './components/ProductListView.vue';
import ProductDetailView from './components/ProductDetailView.vue';
import BasketView from './components/BasketView.vue';
import HomeCategoriesView from './components/HomeCategoriesView.vue';

const routes = [
  { path: '/', component: HomeCategoriesView },
  { path: '/category/:category', component: ProductListView, props: true },
  { path: '/product/:id', component: ProductDetailView, props: true },
  { path: '/basket', component: BasketView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
