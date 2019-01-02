export const routes = [
  { 
    path: '/login', 
    components: {
      default: () => import('../pages/Login.vue')
    },
    meta: {
      requiresAuth: false
    }  
  },
  { 
    path: '', 
    components: {
      default: () => import('../pages/Home.vue'),
      'header': () => import('../components/Header.vue') 
    },
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/favorites', 
    components: {
      default: () => import('../pages/Favorites.vue'),
      'header': () => import('../components/Header.vue') 
    },
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/chart', 
    components: {
      default: () => import('../pages/Chart.vue'),
      'header': () => import('../components/Header.vue') 
    },
    meta: {
      requiresAuth: true
    } 
  },
  { 
    path: '*', 
    components: {
      default: () => import('../pages/Home.vue'),
      'header': () => import('../components/Header.vue') 
    },
    meta: {
      requiresAuth: true
    }
  }

]