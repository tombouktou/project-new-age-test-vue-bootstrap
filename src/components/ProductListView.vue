<template>
  <div class="container my-4">
    <h1 class="mb-4">Liste des produits</h1>
    <BootstrapLoader v-if="isLoading" />
    <div v-else class="row g-4">
      <div v-for="product in products" :key="product.id" class="col-12 col-md-6 col-lg-4">
        <div class="card h-100">
          <img :src="product.thumbnail" class="card-img-top" :alt="product.title" style="object-fit:cover;max-height:200px;">
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
import { ref, onMounted } from 'vue';
import BootstrapLoader from './BootstrapLoader.vue';

const products = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  isLoading.value = true;
  try {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    products.value = data.products;
  } finally {
    isLoading.value = false;
  }
});
</script>
