<template>
    <v-content>
        <div v-for="(joke, index) in jokes" :key="joke.id">
            <joke :joke="joke" :index="index" v-on:remove="removeJoke" v-on:favorite="favoriteJoke" />
        </div>
        <v-btn fab dark large fixed bottom right @click="getJoke">
            <v-icon dark>add</v-icon>
        </v-btn>
        <v-snackbar v-model="snackbar" :bottom="true" :timeout="snackbarTimeout">
            {{ snackbarText }}
            <v-btn color="pink" flat @click="snackbar = false">
                Close
            </v-btn>
        </v-snackbar>
    </v-content>
</template>

<script>
import Joke from '../components/Joke.vue';
import axios from 'axios';

export default {
    name: "Home",
    components: {
        Joke
    },
    data() {
        return {
            snackbar: false,
            snackbarTimeout: 6000,
            snackbarText: ""
        }
    },
    methods: {
        getJoke: function () {
            axios.get("https://api.chucknorris.io/jokes/random").then((response) => {
                let joke = response.data;
                joke.favorite = false;
                this.$store.commit("add", joke);
            })
        },
        removeJoke: function (toRemove) {
            this.$store.commit("change", 
                this.$store.getters.jokes.filter((a) => {
                    return a.id != toRemove.id
                })
            );
            this.snackbarText = "The joke is gone!";
            this.snackbar = true;
        },
        favoriteJoke(index) {
            if (this.$store.getters.jokes[index].favorite)
                this.$store.getters.jokes[index].favorite = false;
            else
                this.$store.getters.jokes[index].favorite = true;
        }
    },
    computed:{
        jokes: function(){
            return this.$store.getters.jokes;
        }
    }
}
</script>

<style scopped>
    
</style>