<template lang="pug">
  v-container.fluid
    div
      v-row
        v-col(sm12)
          h2 Signup
        form
          v-text-field(label="User name" required)
          v-text-field(label="Password" type="password" required)
          v-text-field(label="Repeat Password" required)
          v-btn(primary outline) Register
</template>

<script type="text/javascript">
export default {
  name: 'register'
}
</script>

<style>
.register {
  text-align: center;
}
</style>
