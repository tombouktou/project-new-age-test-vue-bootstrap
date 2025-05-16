<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <div class="container">
      <router-link to="/" class="navbar-brand fw-bold d-flex align-items-center">
        <i class="bi bi-shop-window me-2 fs-3 text-primary"></i> New Age Shop
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNavbar">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="active">Catégories</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/basket" class="nav-link position-relative">
              <i class="bi bi-cart3 fs-5"></i>
              <span v-if="basketCount > 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{{ basketCount }}</span>
              Panier
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { basket } from '../basketStore';

const basketCount = computed(() => basket.items.reduce((sum, item) => sum + item.quantity, 0));
</script>

<style scoped>
.navbar-brand {
  font-size: 1.5rem;
}
.nav-link.active {
  font-weight: bold;
  color: #0d6efd !important;
}
</style>
