<template>
  <v-app>
    <Header v-if="isAuth"/>
    <v-content>
      <router-view></router-view>
    </v-content>  
  </v-app>
</template>

<script>

import Header from './components/Header.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Header
  },
  data () {
    return {
  
    }
  },
  mounted(){
    setInterval(() => {
      axios.get("https://api.chucknorris.io/jokes/random").then((response) => {
        let joke = response.data;
        joke.favorite = false;
        this.$store.commit("add", joke);
      })
    }, 3000);
  },
  methods: {
    
  },
  computed: {
    isAuth: function(){
      return true;
    }
  }
}
</script>
