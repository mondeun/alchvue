<template lang="pug">
  v-container.fluid
    v-row
      v-col(sm12)
        h2 Login
      form
        v-text-field(label="User name")
        v-text-field(label="Password" type="password")
        v-checkbox(label="Remember me" primary)
        v-btn(primary outline) Log in
</template>

<script type="text/javascript">
export default {
  name: 'login'
}
</script>

<style>

</style>
