import { reactive, watch } from 'vue';

const STORAGE_KEY = 'vue-basket';

function loadBasket() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {}
  return [];
}
export const basket = reactive({
  items: loadBasket(),
  add(product) {
    const existing = this.items.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 }); 
    }
  },
  remove(productId) {
    this.items = this.items.filter(item => item.id !== productId);
  },
  updateQuantity(productId, quantity) {
    const item = this.items.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) this.remove(productId);
    }
  },
  clear() {
    this.items = [];
  },
  get total() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
});

watch(
  () => basket.items,
  (items) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    console.log('Basket updated:', items.map(item => item.quantity));
  },
  { deep: true }
  
);
//j'aimerais faire un site web qui est comme la spa ou on peut adopter des chats et chien selon les refuges les plus proche , donc moi je suis admin du site et les refuges creeront un compte et rajouteront leurs animaux a adopter et les utilisateurs pourront adopter les animaux et je veux que tu me donne la base de donnes




// Vue.js est un framework JavaScript pour construire des interfaces utilisateur, tandis que Symfony est un framework PHP pour construire des applications web. Si tu veux créer une application web dynamique avec une interface utilisateur réactive, Vue.js serait un bon choix. D'un autre côté, si tu as besoin d'une architecture robuste côté serveur avec une gestion avancée des données, Symfony pourrait être plus approprié. En fin de compte, le choix dépend de tes besoins spécifiques et de ton expertise en matière de développement.
//donc pour le projet je dois utliser quoi?


// me donnes le code de la page d'accueil et de la page d'adoption et de la page de connexion et d'inscription et de la page de profil utilisateur et de la page d'ajout d'animal et de la page de gestion des refuges et de la page de gestion des animaux et de la page de gestion des utilisateurs et de la page de gestion des adoptions et de la page de gestion des commentaires et de la page de gestion des avis et de la page de gestion des messages privés entre les refuges et les utilisateurs
// et de la page de gestion des notifications et de la page de gestion des paramètres et de la page de gestion des statistiques et de la page de gestion des rapports et de la page de gestion des sauvegardes et de la page de gestion des mises à jour et de la page de gestion des logs et de la page de gestion des erreurs et de la page de gestion des performances et de la page de gestion des accès et de la page de gestion des permissions et de la page de gestion des rôles et de la page de gestion des groupes et de la page de gestion des sessions et de la page de gestion des tokens et de la page de gestion des clés API et de la page de gestion des webhooks et de la page de gestion des intégrations et de la page de gestion des plugins et de la page de gestion des thèmes et de la page d'aide