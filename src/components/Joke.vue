<template>
  <div class="card">
    <img :src="joke.icon_url" alt="Chuck Icon" style="width:20%">
    <h1>#FunJoke</h1>
    <blockquote>
      <p>{{joke.value}}</p>
    </blockquote>
    <p>
      <button @click="remove(joke)">Remove</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Joke',
  props: {
    joke: Object
  },
  methods: {
    remove(joke) {
      this.$parent.removeJoke(joke)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: 0 auto;
  padding: 16px;
  text-align: center;
  font-family: arial;
}

.joke {
  margin: 16px;
}

blockquote {
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  quotes: "\201C""\201D""\2018""\2019";
}

blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}

blockquote p {
  display: inline;
}

button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

button:hover {
  opacity: 0.7;
}
</style>
