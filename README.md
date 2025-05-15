# Application de Gestion de Produits avec Vue 3, Vue Router et Bootstrap

Cette application permet d'afficher une liste de produits et de consulter le détail de chaque produit via une API externe. Elle utilise Vue 3 (Composition API), Vue Router pour la navigation, et Bootstrap pour le style.

## Fonctionnalités
- Liste des produits avec affichage en grille (Bootstrap)
- Détail d'un produit accessible via l'URL `/product/:id`
- Chargement des données depuis l'API [DummyJSON](https://dummyjson.com/products)
- Loader Bootstrap lors du chargement des données

## Démarrage

```bash
npm install
npm run dev
```

## Structure principale
- `src/components/ProductListView.vue` : Liste des produits
- `src/components/ProductDetailView.vue` : Détail d'un produit
- `src/components/BootstrapLoader.vue` : Loader d'attente
- `src/router.js` : Configuration des routes

## Dépendances principales
- Vue 3
- Vue Router 4
- Bootstrap 5

## Aperçu

- Liste des produits (desktop et mobile)
- Détail d'un produit (desktop et mobile)

> Voir le dossier `docs/` pour des exemples de rendu.
