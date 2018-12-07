<template>
    <v-content>
        <div v-for="(joke, index) in jokes" :key="joke.id">
            <joke :joke="joke" :index="index" v-on:remove="removeJoke" v-on:favorite="favoriteJoke" />
        </div>
    </v-content>
</template>

<script>
import Joke from '../components/FavoritedJoke.vue';

export default {
    name: "Favorites",
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
    },
    computed: {
        jokes: function() {
            return this.$store.getters.jokes.filter((j)=>{
                return j.favorite;
            });
        }
    }
}
</script>

<style scopped>
    
</style>