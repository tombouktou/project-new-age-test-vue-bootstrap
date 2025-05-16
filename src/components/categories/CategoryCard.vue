<template>
  <div class="card category-card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
    <div class="card-body d-flex flex-column justify-content-center align-items-center text-center p-4">
      <div class="category-icon mb-3">
        <i :class="getCategoryIcon"></i>
      </div>
      <h4 class="card-title">{{ formatCategoryName }}</h4>
      <p class="text-muted mb-4">{{ getCategoryDescription }}</p>
      <router-link :to="`/category/${encodeURIComponent(name)}`" class="btn btn-primary mt-auto w-100">
        Voir les produits
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  }
});

const formatCategoryName = computed(() => {
  return props.name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
});

const getCategoryIcon = computed(() => {
  const iconMap = {
    'smartphones': 'bi bi-phone',
    'laptops': 'bi bi-laptop',
    'fragrances': 'bi bi-droplet',
    'skincare': 'bi bi-star',
    'groceries': 'bi bi-cart',
    'home-decoration': 'bi bi-house-heart',
    'furniture': 'bi bi-lamp',
    'tops': 'bi bi-tags',
    'womens-dresses': 'bi bi-gender-female',
    'womens-shoes': 'bi bi-shoe-heel',
    'mens-shirts': 'bi bi-gender-male',
    'mens-shoes': 'bi bi-shoe',
    'mens-watches': 'bi bi-watch',
    'womens-watches': 'bi bi-watch',
    'womens-bags': 'bi bi-bag',
    'womens-jewellery': 'bi bi-gem',
    'sunglasses': 'bi bi-sunglasses',
    'automotive': 'bi bi-car-front',
    'motorcycle': 'bi bi-bicycle',
    'lighting': 'bi bi-lightbulb'
  };
  return iconMap[props.name] || 'bi bi-box';
});

const getCategoryDescription = computed(() => {
  const descriptions = {
    'smartphones': 'Découvrez nos smartphones dernière génération',
    'laptops': 'Des ordinateurs portables performants',
    'fragrances': 'Des parfums de luxe pour tous',
    'skincare': 'Prenez soin de votre peau',
    'groceries': 'Produits alimentaires de qualité',
    'home-decoration': 'Embellissez votre intérieur',
    // Add more descriptions as needed
  };
  return descriptions[props.name] || 'Explorez notre sélection de produits';
});
</script>

<style scoped>
.category-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: var(--surface, white);
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
}

.category-icon {
  font-size: 2.5rem;
  color: var(--bs-primary);
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(var(--bs-primary-rgb), 0.1);
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.category-card:hover .category-icon {
  transform: scale(1.1);
}

.card-title {
  color: var(--bs-gray-800);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.btn {
  transition: transform 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}
</style>
