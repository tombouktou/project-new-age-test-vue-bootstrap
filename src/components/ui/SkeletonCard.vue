<template>
  <div class="card skeleton-card h-100 border-0">
    <div class="skeleton-image"></div>
    <div class="card-body">
      <div class="skeleton-title mb-2"></div>
      <div class="skeleton-text"></div>
      <div class="skeleton-text"></div>
      <div class="skeleton-text w-75"></div>
      <div class="d-flex justify-content-between mt-4">
        <div class="skeleton-button"></div>
        <div class="skeleton-button"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skeleton-card {
  position: relative;
  overflow: hidden;
}

.skeleton-card::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0.5) 60%,
    rgba(255, 255, 255, 0)
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}

.skeleton-image {
  height: 200px;
  background-color: var(--bs-gray-200);
}

.skeleton-title {
  height: 24px;
  background-color: var(--bs-gray-200);
  border-radius: 4px;
}

.skeleton-text {
  height: 16px;
  background-color: var(--bs-gray-200);
  border-radius: 4px;
  margin-bottom: 8px;
}

.skeleton-button {
  height: 32px;
  width: 80px;
  background-color: var(--bs-gray-200);
  border-radius: 4px;
}
</style>
