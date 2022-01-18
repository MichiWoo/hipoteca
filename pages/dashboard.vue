<template>
  <div>
    <h1>Dashboard</h1>
    <p>{{ loguinIn ? 'Logueado' : 'No Logueado' }}</p>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  computed: {
    user() {
      return this.$store.state.login.user
    },
    loguinIn() {
      return this.$store.state.login.loggedIn
    },
  },
}
</script>
