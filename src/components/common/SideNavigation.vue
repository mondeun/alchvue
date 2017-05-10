<template lang="pug">
  div
    md-sidenav.md-left.md-fixed(ref="sidebar")
      md-list.md-dense
        md-list-item
          p hello
        md-list-item
          p hello  
        md-list-item
          p hello  
        md-list-item
          p hello  
        md-list-item
          p hello  
        md-list-item
          p hello  
        md-list-item
          p hello  
        md-list-item
          p hello  
</template>

<script type="text/javascript">
export default {
  name: 'SideNavigation',
  mounted () {
    this.$refs.sidebar.open()
  }
}
</script>

<style>

</style>
