<template>
  <v-app>
    <v-navigation-drawer temporary :clipped="false" v-model="drawer" enable-resize-watcher app light>
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

        <v-list-tile v-for="item in items" :key="item.title" :to="item.path">
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
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      items: [
        { title: 'Home', icon: 'list', path: "/" },
        { title: 'Favorites', icon: 'favorite', path: "/favorites" }
      ],
      right: null
    }
  },
  methods: {
    
  }
}
</script>
