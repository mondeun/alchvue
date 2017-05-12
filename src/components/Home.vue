<template lang="pug">
  .home
    img(src="../assets/logo.png")
    h1.md-display-3 {{ msg }}
    h2 Essential Links
    ul
      li: a(href='https://vuejs.org' target='_blank') Core Docs
      li: a(href='https://forum.vuejs.org' target='_blank') Forum
    h2 Ecosystem
    ul
      li: a(href='http://router.vuejs.org/' target='_blank') vue-router
      li: a(href='http://vuex.vuejs.org/' target='_blank') vuex
      li: a(href='http://vue-loader.vuejs.org/' target='_blank') vue-loader
      li: a(href='https://github.com/vuejs/awesome-vue' target='_blank') awesome-vue
      li: a(href='https://vuetifyjs.com/' target='_blank') Vuetify
    div
      v-card(v-for="m in movies" :key="m.id")
        v-card-row.green
          v-card-title.white--text {{ m.title }}
        v-card-text
          v-card-row(height="75px")
            div
              p {{ m.year }} - {{ m.score }}
</template>

<script type="text/javascript">
import { mapGetters, mapActions } from 'Vuex'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Alchemy Cines'
    }
  },
  computed: mapGetters({
    movies: 'allMovies'
  }),
  methods: mapActions([
    'addMovieToLibrary'
  ]),
  created () {
    this.$store.dispatch('getAllMovies')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
