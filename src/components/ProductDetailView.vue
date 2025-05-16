<template>
  <div class="container my-4">
    <router-link to="/" class="btn btn-link mb-3 glow-on-hover" data-glow-color="#f50057">&larr; Retour à la liste</router-link>
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
          <button class="btn btn-success mt-3 w-100" @click="addToBasket">Ajouter au panier</button>
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
import { basket } from '../basketStore';

const route = useRoute();
const product = ref(null);
const isLoading = ref(true);

function addToBasket() {
  if (product.value) basket.add(product.value);
}

onMounted(async () => {
  isLoading.value = true;
  try {
    const res = await fetch(`https://dummyjson.com/products/${route.params.id}`);
    if (res.ok) {
      product.value = await res.json();
    }
  } catch (error) {
    console.error("Error fetching product:", error);
  } finally {
    isLoading.value = false;
  }
});
</script>
