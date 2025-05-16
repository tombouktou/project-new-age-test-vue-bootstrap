<template>
  <div class="card product-card h-100 border-0 shadow-sm">
    <div class="position-relative">
      <img :src="product.thumbnail" :alt="product.title" class="card-img-top product-image">
      <div class="discount-badge" v-if="product.discountPercentage">
        -{{ Math.round(product.discountPercentage) }}%
      </div>
    </div>
    <div class="card-body d-flex flex-column">
      <h5 class="card-title text-truncate mb-2">{{ product.title }}</h5>
      <p class="card-text description flex-grow-1">{{ product.description }}</p>
      <div class="price-section mb-3">
        <span class="current-price">${{ formatPrice(calculateDiscountedPrice) }}</span>
        <span class="original-price text-muted text-decoration-line-through" v-if="product.discountPercentage">
          ${{ formatPrice(product.price) }}
        </span>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <router-link :to="'/product/' + product.id" class="btn btn-outline-primary btn-sm">
          Détails
        </router-link>
        <button @click="addToCart" class="btn btn-primary btn-sm">
          <i class="bi bi-cart-plus"></i> Ajouter
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useBasketStore } from '@/stores/basket';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const basketStore = useBasketStore();

const calculateDiscountedPrice = computed(() => {
  return props.product.price * (1 - props.product.discountPercentage / 100);
});

const formatPrice = (price) => Number(price).toFixed(2);

const addToCart = () => {
  basketStore.addToBasket(props.product);
};
</script>

<style scoped>
.product-card {
  transition: transform 0.2s, box-shadow 0.2s;
  border-radius: 12px;
  overflow: hidden;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md) !important;
}

.product-image {
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.discount-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: var(--bs-danger);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: bold;
}

.description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 3em;
  font-size: 0.9rem;
  color: var(--bs-gray-600);
}

.current-price {
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--bs-primary);
  margin-right: 0.5rem;
}

.original-price {
  font-size: 0.9rem;
}

.btn {
  transition: transform 0.2s;
}

.btn:hover {
  transform: translateY(-2px);
}
</style>
