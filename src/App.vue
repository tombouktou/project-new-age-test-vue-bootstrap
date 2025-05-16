<script setup>
import HeaderView from './components/HeaderView.vue';
import FooterView from './components/FooterView.vue';
import '../src/assets/styles/variables.css';
</script>

<template>
  <div class="app-wrapper">
    <HeaderView />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <FooterView />
  </div>
</template>

<style>
html, body {
  min-height: 100%;
  background-color: var(--background);
  color: var(--text-primary);
}

.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

/* Page Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Global Style Overrides */
.btn-primary {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  transition: var(--transition-fast);
}

.btn-primary:hover {
  background-color: var(--primary-dark);
  border-color: var(--primary-dark);
}

.card {
  background-color: var(--surface);
  border: none;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-normal);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.badge {
  font-weight: 500;
}
</style>
