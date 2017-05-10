<template lang="pug">
  v-app#app(left-fixed-sidebar sidebar-under-toolbar scroll-y)
    v-toolbar.deep-purple.darken-4
      v-toolbar-side-icon.hidden-lg-and-up(@click.native.stop="toggleSidebar = !toggleSidebar")
      v-toolbar-title.hidden-sm-and-down Alchemy Cines
      v-spacer.hidden-sm-and-down
      v-text-field(append-icon="search" label="Search..." hide-details single-line dark style="flex: 0.5em")
      a(href="https://gitlab.com/alchemy-cines" target="_blank")
        v-btn(icon dark)
          v-icon code

    v-sidebar.mt-0(v-model="toggleSidebar" fixed)
      v-list
        v-list-item
          v-list-tile(router=true href="/" ripple)
            v-list-tile-title Home
        v-list-item
          v-list-tile(router=true href="/about" ripple)
            v-list-tile-title About
        v-divider
        v-list-item
          v-list-tile(disabled)
            p © 2017

    main
      v-content
        v-container(fluid)
          router-view
</template>

<script type="text/javascript">
import AppNavigation from './components/common/AppNavigation'
import SideNavigation from './components/common/SideNavigation'

export default {
  name: 'app',

  data () {
    return {
      toggleSidebar: Boolean
    }
  },

  components: {
    AppNavigation,
    SideNavigation
  }
}
</script>
