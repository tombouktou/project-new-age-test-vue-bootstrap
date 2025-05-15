<template>
  <div class="container my-4">
    <router-link to="/" class="btn btn-link mb-3">&larr; Retour à la liste</router-link>
    <BootstrapLoader v-if="isLoading" />
    <div v-else-if="product" class="d-flex justify-content-center">
      <div class="card img col-12 col-md-6 col-lg-4">
      <img :src="Array.isArray(product.images) ? product.images[product.images.length - 1] : product.images" class="card-img" :alt="product.title" >
      <div class="card-body">
        <h2 class="card-title">{{ product.title }}</h2>
        <p class="card-text">{{ product.description }}</p>
        <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Prix:</strong> {{ product.price }} $</li>
        <li class="list-group-item"><strong>Catégorie:</strong> {{ product.category }}</li>
        <li class="list-group-item"><strong>Stock:</strong> {{ product.stock }}</li>
        </ul>
      </div>
      </div>
    </div>
    <div v-else class="alert alert-danger">Produit non trouvé.</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import BootstrapLoader from './BootstrapLoader.vue';

const route = useRoute();
const product = ref(null);
const isLoading = ref(true);

onMounted(async () => {
  isLoading.value = true;
  try {
    const res = await fetch(`https://dummyjson.com/products/${route.params.id}`);
    if (res.ok) {
      //explain the line before this one 
      // 


      product.value = await res.json();

    }
  } finally {
    isLoading.value = false;
  }
});
</script>
