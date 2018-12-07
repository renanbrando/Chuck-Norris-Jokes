<template>
  <v-app>
    <v-navigation-drawer :clipped="true" v-model="drawer" enable-resize-watcher app light>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZXoZ0rGm7BTxNYLDBKUfr3ZLGuL4NPLKK715CMtmt_byIGSfv">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Chuck Norris</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
    
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> 
    <v-toolbar app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
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
        <div v-for="(joke, index) in jokes" :key="joke.id">
          <joke :joke="joke" :index="index" v-on:remove="removeJoke" v-on:favorite="favoriteJoke"/>
        </div>
        <v-btn fab dark large fixed bottom right @click="getJoke">
          <v-icon dark>add</v-icon>
        </v-btn>
      </div>
    </v-content>
    <v-snackbar 
      v-model="snackbar" 
      :bottom="true"
      :timeout="snackbarTimeout">
      {{ snackbarText }}
      <v-btn color="pink" flat @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
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
      jokes: [],
      snackbar: false,
      snackbarTimeout: 6000,
      snackbarText: "",
       drawer: false,
        items: [
          { title: 'Home', icon: 'list' },
          { title: 'Favorites', icon: 'favorite' }
        ],
        right: null
    }
  },
  methods: {
    getJoke: function () {
      axios.get("https://api.chucknorris.io/jokes/random").then((response) => {
        let joke = response.data;
        joke.favorite = false;
        this.jokes.push(joke);
      })
    },
    removeJoke: function (toRemove) {
      this.jokes = this.jokes.filter((a) => {
        return a.id != toRemove.id
      });
      this.snackbarText = "The joke is gone!";
      this.snackbar = true;
    },
    favoriteJoke(index) {
      if (this.jokes[index].favorite)
        this.jokes[index].favorite = false;
      else
        this.jokes[index].favorite = true;
    }
  }
}
</script>
