<template lang="pug">
  v-card
    v-card-row.blue-grey.darken-1
      v-card-title.white--text {{ this.movie.title }}
      v-btn.blue--text.text--lighten-2(icon)
        v-icon thumb_up 
      v-btn.red--text.text--lighten-2(icon)
        v-icon thumb_down
    v-card-text
      v-card-row(height="75px")
        div
          p {{ this.movie.year }} - Score: {{ this.movie.score }}
          a(:href='movie.link' target="_blank") Link
</template>

<script type="text/javascript">
export default {
  name: 'movieCard',
  props: [
    'movie'
  ]
}
</script>

<style>

</style>
