<template>
  <div class="container my-4">
    <h1 class="mb-4">
      Liste des produits
      <span v-if="currentCategory" class="fs-5 text-muted ms-2">({{ currentCategory }})</span>
    </h1>
    <BootstrapLoader v-if="isLoading" />
    <div v-else class="row g-4">
      <div v-for="product in products" :key="product.id" class="col-12 col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
          <div class="position-relative display-flex">
            <span class="badge bg-success position-absolute top-0 end-0 m-2 px-3 py-2 fs-6">{{ product.price }}€</span>
          </div>
          <img :src="Array.isArray(product.images) ? product.images[product.images.length - 1] : product.images" class="card-img" :alt="product.title">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <router-link :to="`/product/${product.id}`" class="btn btn-primary mt-auto">Voir détails</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import BootstrapLoader from './BootstrapLoader.vue';

const route = useRoute();
const products = ref([]);
const isLoading = ref(true);

const currentCategory = computed(() => route.params.category ? decodeURIComponent(route.params.category) : undefined);

async function fetchProducts() {
  isLoading.value = true;
  try {
    let url = 'https://dummyjson.com/products';
    if (currentCategory.value) {
      url = `https://dummyjson.com/products/category/${encodeURIComponent(currentCategory.value)}`;
    }
    const res = await fetch(url);
    const data = await res.json();
    products.value = data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    products.value = [];
  } finally {
    isLoading.value = false;
  }
}

onMounted(fetchProducts);
watch(() => route.params.category, fetchProducts);
</script>