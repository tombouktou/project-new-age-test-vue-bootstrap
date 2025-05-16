<template>
  <div class="container my-4">
    <h1 class="mb-4">Catégories de produits</h1>
    <div v-if="isLoading" class="text-center my-5">
      <BootstrapLoader />
    </div>
    <div v-else>
      <div class="row g-4">
        <div v-for="category in categories" :key="category" class="col-12 col-md-6 col-lg-4">
          <div class="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
            <div class="card-body d-flex flex-column justify-content-center align-items-center text-center p-4">
              
              <h4 class="card-title ">{{ category.name }}</h4>
              <router-link :to="`/category/${encodeURIComponent(category.name)}`" class="btn btn-primary mt-auto w-100">
                Voir les produits
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import BootstrapLoader from './BootstrapLoader.vue';

const categories = ref([]);
const isLoading = ref(true);


onMounted(async () => {
  isLoading.value = true;
  try {
    const res = await fetch('https://dummyjson.com/products/categories');
    categories.value = await res.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    categories.value = [];
  } finally {
    isLoading.value = false;
  }
});
</script>

<style scoped>
.card {
  transition: transform 0.2s;
}
.card:hover {
  transform: translateY(-5px);
}
</style>
