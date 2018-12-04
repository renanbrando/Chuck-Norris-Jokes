<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Chuck Norris</span>
        <span class="font-weight-light">JOKES</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/renanbrando/Chuck-Norris-Jokes.git" target="_blank">
        <span class="mr-2">See More</span>
      </v-btn>
    </v-toolbar>
    <v-content>
      <div class="container">
        <div v-for="joke in jokes" :key="joke.id">
          <joke :joke="joke" v-on:remove="removeJoke" />
        </div>
        <v-btn fab dark large fixed bottom right @click="getJoke">
          <v-icon dark>add</v-icon>
        </v-btn>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Joke from './components/Joke.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Joke
  },
  data () {
    return {
      jokes: []
    }
  },
  methods: {
    getJoke: function () {
      axios.get("https://api.chucknorris.io/jokes/random").then((response) => {
        this.jokes.push(response.data);
      })
    },
    removeJoke: function (toRemove) {
      this.jokes = this.jokes.filter((a) => {
        return a.id != toRemove.id
      });
    }
  }
}
</script>
