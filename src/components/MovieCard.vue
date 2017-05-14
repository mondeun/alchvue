<template lang="pug">
  v-card
    v-card-row.blue-grey.darken-1
      v-card-title.white--text {{ this.movie.title }}
      <v-btn icon class="blue--text text--lighten-2">
        <v-icon>thumb_up</v-icon>
      </v-btn>
      <v-btn icon class="red--text text--lighten-2">
        <v-icon>thumb_down</v-icon>
      </v-btn>
    v-card-text
      v-card-row(height="75px")
        div
          p {{ this.movie.year }} - Score: {{ this.movie.score }}
          a(:href='movie.link' target="_blank") Link
</template>

<script type="text/javascript">
export default {
  name: 'MovieCard',
  props: [
    'movie'
  ]
}
</script>

<style>

</style>
