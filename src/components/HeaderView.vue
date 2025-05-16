<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <router-link to="/" class="navbar-brand d-flex align-items-center">
          <i class="bi bi-shop-window me-2 fs-3"></i>
          <span class="brand-text">New Age Shop</span>
        </router-link>
        
        <button class="navbar-toggler" type="button" 
                @click="isMenuOpen = !isMenuOpen"
                :class="{ 'is-active': isMenuOpen }"
                :aria-expanded="isMenuOpen">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>

        <div class="collapse navbar-collapse" :class="{ 'show': isMenuOpen }" id="mainNavbar">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li class="nav-item">
              <router-link to="/" class="nav-link" active-class="active">
                <i class="bi bi-grid me-2"></i>Catégories
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/basket" class="nav-link cart-link" active-class="active">
                <div class="cart-icon-wrapper">
                  <i class="bi bi-cart3"></i>
                  <span v-if="basketCount > 0" class="cart-badge">{{ basketCount }}</span>
                </div>
                <span class="ms-2">Panier</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import { basket } from '../basketStore';

const isMenuOpen = ref(false);
const basketCount = computed(() => basket.items.reduce((sum, item) => sum + item.quantity, 0));
</script>

<style scoped>
.header {
  background-color: var(--surface);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar {
  padding: 1rem 0;
}

.navbar-brand {
  color: var(--primary-color);
  font-weight: 700;
  transition: var(--transition-normal);
}

.navbar-brand:hover {
  color: var(--primary-dark);
}

.brand-text {
  font-size: 1.25rem;
}

.nav-link {
  color: var(--text-secondary);
  font-weight: 500;
  transition: var(--transition-fast);
  padding: 0.5rem 1rem;
  border-radius: var(--radius-md);
}

.nav-link:hover, .nav-link.active {
  color: var(--primary-color);
  background-color: rgba(79, 70, 229, 0.1);
}

.cart-link {
  display: flex;
  align-items: center;
}

.cart-icon-wrapper {
  position: relative;
  display: inline-block;
}

.cart-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: var(--accent-danger);
  color: white;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  min-width: 1.5rem;
  text-align: center;
}

/* Hamburger Menu */
.navbar-toggler {
  border: none;
  padding: 0.5rem;
  width: 3rem;
  height: 3rem;
  position: relative;
  transition: var(--transition-normal);
}

.hamburger-line {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--text-primary);
  margin: 5px auto;
  transition: var(--transition-normal);
}

.navbar-toggler.is-active .hamburger-line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.navbar-toggler.is-active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.navbar-toggler.is-active .hamburger-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Responsive Design */
@media (max-width: 991.98px) {
  .navbar-collapse {
    background-color: var(--surface);
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 1rem;
    box-shadow: var(--shadow-md);
    transform: translateY(-10px);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition-normal);
  }

  .navbar-collapse.show {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-item {
    margin: 0.5rem 0;
  }
}
</style>
