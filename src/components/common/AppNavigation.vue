<template lang="pug">
  md-whiteframe
    md-toolbar.md-dense.md-accent.nav-trigger.md-flex
      .md-toolbar-container.md-flex
        router-link.md-button.md-icon-button(to="/" exact)
          md-icon home
        
        span: h2.md-title Alchemy Cines

        span(style="flex: 1")

        span
          md-input-container
            md-input(type="text" placeholder="Search")

        router-link.md-button(to="/about") About
        md-button Hello
</template>

<script type="text/javascript">
export default {
  name: 'AppNavigation'
}
</script>
