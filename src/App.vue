<template>
  <div>
    <div class="container">
      <div v-for="joke in jokes" :key="joke.id">
        <joke :joke="joke" v-on:remove="removeJoke"/>
      </div>
      <div class="fab" @click="getJoke" text="Add Joke">+</div>
    </div>
  </div>
</template>

<script>
import Joke from './components/Joke.vue';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    Joke
  },
  data() {
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

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  margin: 0px auto;
  width: 500px;
}

.fab {
   width: 60px;
   height: 60px;
   padding: 8px;
   background-color: #000;
   border-radius: 50%;
   box-shadow: 0 6px 10px 0 #666;
   transition: all 0.1s ease-in-out;
 
   font-size: 64px;
   color: white;
   text-align: center;
   line-height: 55px;
   cursor: pointer;
   
   position: fixed;
   right: 50px;
   bottom: 50px;
}
 
.fab:hover {
   box-shadow: 0 6px 14px 0 #666;
   transform: scale(1.05);
}
</style>
