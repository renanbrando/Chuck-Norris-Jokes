import Header from '../components/Header.vue'
import Login from '../pages/Login.vue'

// Lazy loading
const Home = resolve => {
  require.ensure(['../pages/Home.vue'], () => {
      resolve(require('../pages/Home.vue'));
  });
};

const Favorites = resolve => {
  require.ensure(['../pages/Favorites.vue'], () => {
      resolve(require('../pages/Favorites.vue'));
  });
};

const Chart = resolve => {
  require.ensure(['../pages/Chart.vue'], () => {
      resolve(require('../pages/Chart.vue'));
  });
};

export const routes = [
  { 
    path: '/login', 
    components: {
      default: Login
    },
    meta: {
      requiresAuth: false
    }  
  },
  { 
    path: '', 
    components: {
      default: Home,
      'header': Header 
    },
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/favorites', 
    components: {
      default: Favorites,
      'header': Header
    },
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/chart', 
    components: {
      default: Chart,
      'header': Header
    },
    meta: {
      requiresAuth: true
    } 
  },
  { 
    path: '*', 
    components: {
      default: Home,
      'header': Header
    },
    meta: {
      requiresAuth: true
    }
  }

]