<template lang="pug">
  #app
    navigation
    img(src="./assets/logo.png")
    router-view
</template>

<script>
import Navigation from './components/common/Navigation'

export default {
  name: 'app',

  components: {
    Navigation
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
}
</style>
