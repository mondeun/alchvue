<template lang="pug">
  v-container.fluid
    .register
      v-row
        v-col(sm12)
          h2 Signup
        v-col(sm4)
          form
            v-text-field(label="User name" required)
            v-text-field(label="Password" type="password" required)
            v-text-field(label="Repeat Password" required)
            v-btn(primary outline) Hello
</template>

<script type="text/javascript">
export default {
  name: 'Register'
}
</script>

<style>
.register {
  text-align: center;
}
</style>
