<template>
  <v-app> 
    <v-content>
      <router-view name="header">
        <Header v-if="isAuth"/>
      </router-view>
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
      if (new Date().getSeconds() === 30){
        axios.get("https://api.chucknorris.io/jokes/random").then((response) => {
          let joke = response.data;
          joke.favorite = false;
          this.$store.commit("add", joke);
          this.$store.commit("addJokeLength", joke);
        })
      }
    }, 1000);
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
