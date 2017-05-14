<template lang="pug">
  v-app#app(left-fixed-sidebar sidebar-under-toolbar scroll-y)
    v-toolbar.blue-grey.darken-3
      v-toolbar-side-icon.hidden-lg-and-up(@click.native.stop="toggleSidebar = !toggleSidebar")
      v-toolbar-title.hidden-sm-and-down {{ msg }}
      v-spacer.hidden-sm-and-down
      v-text-field(append-icon="search" label="Search..." hide-details single-line dark style="flex: 0.5em")
      v-toolbar-items
        v-toolbar-item(router href="/login") Log in
        v-toolbar-item(router href="/register") Sign up

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
        router-view
</template>

<script type="text/javascript">
export default {
  name: 'app',

  data () {
    return {
      toggleSidebar: Boolean,
      msg: 'Alchemy Cines'
    }
  }
}
</script>
