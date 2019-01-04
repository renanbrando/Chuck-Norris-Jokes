import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './router/routes'
import { store } from './store/store'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
 
// Either import only the icons you need like this:
// import { faCoffee, faAngry, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
// library.add(faCoffee, faAngry, faGraduationCap);
 
// Or import the whole sets you need and add it to the library!
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter)
Vue.config.productionTip = false

const state = store;

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return {x: 0, y: 0};
  }
});

router.beforeEach((to, from, next) => {
  // eslint-disable-next-line no-console
  console.log('global beforeEach');
  if (to.meta.requiresAuth){
    if(!state.getters.isAuthenticated){
      router.replace('/login');
    }
  }
  next();
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
