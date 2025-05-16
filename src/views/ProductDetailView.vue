<template>
  <div class="container my-4">
    <template v-if="isLoading">
      <div class="row">
        <div class="col-md-6">
          <div class="skeleton-image mb-4"></div>
        </div>
        <div class="col-md-6">
          <div class="skeleton-title mb-3"></div>
          <div class="skeleton-text mb-2"></div>
          <div class="skeleton-text mb-2"></div>
          <div class="skeleton-text w-75 mb-4"></div>
          <div class="skeleton-price mb-4"></div>
          <div class="d-flex gap-2">
            <div class="skeleton-button"></div>
            <div class="skeleton-button"></div>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="product">
      <div class="row">
        <div class="col-md-6">
          <img :src="product.thumbnail" :alt="product.title" class="img-fluid rounded-4 shadow-sm mb-4">
          <div class="row g-2">
            <div v-for="(image, index) in product.images" :key="index" class="col-3">
              <img :src="image" :alt="product.title" class="img-fluid rounded-2 thumbnail" @click="selectImage(image)">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <h1 class="mb-3">{{ product.title }}</h1>
          <p class="text-muted mb-4">{{ product.description }}</p>
          <div class="price-section mb-4">
            <span class="current-price">${{ formatPrice(calculateDiscountPrice(product.price, product.discountPercentage)) }}</span>
            <span class="original-price text-muted text-decoration-line-through ms-2" v-if="product.discountPercentage">
              ${{ formatPrice(product.price) }}
            </span>
            <span class="discount-badge ms-3" v-if="product.discountPercentage">
              -{{ Math.round(product.discountPercentage) }}%
            </span>
          </div>
          <div class="d-flex gap-3 mb-4">
            <button class="btn btn-primary" @click="addToCart">
              <i class="bi bi-cart-plus"></i> Ajouter au panier
            </button>
            <button class="btn btn-outline-primary">
              <i class="bi bi-heart"></i>
            </button>
          </div>
          <div class="product-meta">
            <p><strong>Catégorie:</strong> {{ formatCategoryName(product.category) }}</p>
            <p><strong>Marque:</strong> {{ product.brand }}</p>
            <p><strong>Note:</strong> {{ product.rating }}/5</p>
          </div>
        </div>
      </div>
    </template>
    <div v-else class="text-center my-5">
      <p class="lead">Produit non trouvé</p>
      <router-link to="/" class="btn btn-primary">Retour à l'accueil</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useBasketStore } from '@/stores/basket';

const route = useRoute();
const basketStore = useBasketStore();
const product = ref(null);
const isLoading = ref(true);

const formatPrice = (price) => Number(price).toFixed(2);

const calculateDiscountPrice = (price, discount) => {
  return price * (1 - discount / 100);
};

const formatCategoryName = (category) => {
  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const addToCart = () => {
  if (product.value) {
    basketStore.addToBasket(product.value);
  }
};

const selectImage = (image) => {
  if (product.value) {
    const currentThumbnail = product.value.thumbnail;
    product.value = {
      ...product.value,
      thumbnail: image
    };
  }
};

onMounted(async () => {
  isLoading.value = true;
  try {
    const res = await fetch(`https://dummyjson.com/products/${route.params.id}`);
    const data = await res.json();
    setTimeout(() => {
      product.value = data;
      isLoading.value = false;
    }, 1000);
  } catch (error) {
    console.error('Error fetching product:', error);
    product.value = null;
    isLoading.value = false;
  }
});
</script>

<style scoped>
.skeleton-image {
  height: 400px;
  background-color: var(--bs-gray-200);
  border-radius: 12px;
}

.skeleton-title {
  height: 32px;
  background-color: var(--bs-gray-200);
  border-radius: 4px;
  width: 70%;
}

.skeleton-text {
  height: 16px;
  background-color: var(--bs-gray-200);
  border-radius: 4px;
}

.skeleton-price {
  height: 24px;
  background-color: var(--bs-gray-200);
  border-radius: 4px;
  width: 40%;
}

.skeleton-button {
  height: 38px;
  background-color: var(--bs-gray-200);
  border-radius: 4px;
  width: 120px;
}

.current-price {
  font-size: 2rem;
  font-weight: bold;
  color: var(--bs-primary);
}

.discount-badge {
  background-color: var(--bs-danger);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: bold;
}

.thumbnail {
  cursor: pointer;
  transition: opacity 0.2s;
}

.thumbnail:hover {
  opacity: 0.8;
}

.product-meta {
  padding-top: 1rem;
  border-top: 1px solid var(--bs-gray-200);
}
</style>
