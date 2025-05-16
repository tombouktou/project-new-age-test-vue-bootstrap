<template>
  <div class="container my-4">
    <h1 class="mb-4">Votre panier</h1>
    <div v-if="basket.items.length === 0" class="alert alert-info">Votre panier est vide.</div>
    <div v-else>
      <table class="table align-middle">
        <thead>
          <tr>
            <th>Produit</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th>Sous-total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in basket.items" :key="item.id">
            <td>
              <img :src="Array.isArray(item.images) ? item.images[item.images.length - 1] : item.images" alt="" style="width: 50px; height: 50px; object-fit: cover;" class="me-2 rounded" />
              {{ item.title }}
            </td>
            <td>{{ item.price }} €</td>
            <td>
              <input type="number" min="1" class="form-control" style="width: 80px;" v-model.number="item.quantity" @change="updateQuantity(item)" />
            </td>
            <td>{{ (item.price * item.quantity).toFixed(2) }} €</td>
            <td>
              <button class="btn btn-danger btn-sm" @click="remove(item.id)"><i class="bi bi-trash"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex justify-content-between align-items-center mt-4">
        <button class="btn btn-outline-danger" @click="clearBasket">Vider le panier</button>
        <h4>Total : {{ basket.total.toFixed(2) }} €</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
import { basket } from '../basketStore';

function updateQuantity(item) {
  basket.updateQuantity(item.id, item.quantity);
}
function remove(id) {
  basket.remove(id);
}
function clearBasket() {
  basket.clear();
}
</script>
