<template lang="pug">
  md-toolbar.md-dense.md-accent.md-layout
    .md-toolbar-container
      router-link.md-button.md-icon-button(to="/" exact)
        md-icon home
      
      span: h2.md-title Alchemy Cines

      span(style="flex: 1")

      span
        md-input-container
          md-input(type="text" placeholder="Search")

      router-link.md-button(to="/about") About
</template>

<script type="text/javascript">
export default {
  name: 'AppNavigation'
}
</script>
