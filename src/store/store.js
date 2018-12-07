import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        jokes: []
    },
    mutations: {
        add(state, joke) {
          state.jokes.push(joke);
        },
        change(state, jokes){
            state.jokes = jokes;
        }
    },
    getters: {
      jokes: state => state.jokes
    }
})