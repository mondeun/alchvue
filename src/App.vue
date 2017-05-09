<template lang="pug">
  #app
    app-navigation
    img(src="./assets/logo.png")
    router-view
</template>

<script type="text/javascript">
import AppNavigation from './components/common/AppNavigation'

export default {
  name: 'app',

  components: {
    AppNavigation
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
