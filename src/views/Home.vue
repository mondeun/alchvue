<template lang="pug">
  v-container.fluid
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
      v-row
        v-col(sm4 v-for="m in movies" :key="m.id")
          movie-card(:movie="m")
</template>

<script type="text/javascript">
import { mapGetters, mapActions } from 'Vuex'
import MovieCard from '../components/MovieCard'

export default {
  name: 'Home',
  data: () => ({
    msg: 'Alchemy Cines'
  }),

  computed: mapGetters({
    movies: 'allMovies'
  }),

  methods: mapActions([
    'addMovieToLibrary'
  ]),

  created () {
    this.$store.dispatch('getAllMovies')
  },

  components: {
    MovieCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home {
  text-align: center;
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
