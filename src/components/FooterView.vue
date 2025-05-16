<template>
  <footer class="footer mt-auto">
    <div class="container py-5">
      <div class="row g-4">
        <div class="col-12 col-md-4">
          <div class="footer-brand mb-3 d-flex align-items-center">
            <i class="bi bi-shop-window me-2 fs-3"></i>
            <span class="brand-text">New Age Shop</span>
          </div>
          <p class="footer-description">
            Découvrez notre sélection unique de produits de qualité. Shopping en ligne simple et sécurisé.
          </p>
          <div class="social-links">
            <a href="#" class="social-link">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="social-link">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#" class="social-link">
              <i class="bi bi-instagram"></i>
            </a>
          </div>
        </div>
        
        <div class="col-6 col-md-2">
          <h5 class="footer-title">Navigation</h5>
          <ul class="footer-links">
            <li><router-link to="/">Accueil</router-link></li>
            <li><router-link to="/basket">Panier</router-link></li>
            <li><a href="#">À propos</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        
        <div class="col-6 col-md-2">
          <h5 class="footer-title">Catégories</h5>
          <ul class="footer-links">
            <li><router-link to="/category/smartphones">Smartphones</router-link></li>
            <li><router-link to="/category/laptops">Laptops</router-link></li>
            <li><router-link to="/category/fragrances">Parfums</router-link></li>
            <li><router-link to="/category/skincare">Soins</router-link></li>
          </ul>
        </div>
        
        <div class="col-12 col-md-4">
          <h5 class="footer-title">Newsletter</h5>
          <p class="footer-description">Restez informé de nos dernières offres</p>
          <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
            <div class="input-group">
              <input type="email" class="form-control" placeholder="Votre email" v-model="email">
              <button class="btn btn-primary" type="submit">
                <i class="bi bi-send"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="container py-3">
        <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-start">
            <p class="mb-0">© {{ new Date().getFullYear() }} New Age Shop. Tous droits réservés.</p>
          </div>
          <div class="col-md-6 text-center text-md-end">
            <div class="footer-legal-links">
              <a href="#">Mentions légales</a>
              <a href="#">Confidentialité</a>
              <a href="#">CGV</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

function subscribeNewsletter() {
  // TODO: Implement newsletter subscription
  console.log('Newsletter subscription:', email.value);
  email.value = '';
}
</script>

<style scoped>
.footer {
  background-color: var(--surface);
  color: var(--text-secondary);
  margin-top: 4rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.footer-brand {
  color: var(--primary-color);
  font-weight: 700;
  font-size: 1.5rem;
}

.footer-description {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: var(--text-secondary);
  font-size: 1.25rem;
  transition: var(--transition-fast);
}

.social-link:hover {
  color: var(--primary-color);
}

.footer-title {
  color: var(--text-primary);
  font-weight: 600;
  margin-bottom: 1.25rem;
  font-size: 1.1rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: var(--transition-fast);
}

.footer-links a:hover {
  color: var(--primary-color);
}

.newsletter-form .input-group {
  box-shadow: var(--shadow-sm);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.newsletter-form .form-control {
  border: none;
  padding: 0.75rem 1rem;
}

.newsletter-form .form-control:focus {
  box-shadow: none;
}

.newsletter-form .btn {
  padding: 0.75rem 1.5rem;
}

.footer-bottom {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 0.875rem;
}

.footer-legal-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.footer-legal-links a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: var(--transition-fast);
}

.footer-legal-links a:hover {
  color: var(--primary-color);
}

@media (max-width: 767.98px) {
  .footer-bottom {
    text-align: center;
  }
  
  .footer-legal-links {
    margin-top: 1rem;
    justify-content: center;
  }
}
</style>
