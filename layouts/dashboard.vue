<template>
  <div class="mx-auto h-full flex flex-col-reverse sm:flex-row">
    <div class="sm:w-48">
      <Sidebar />
    </div>
    <div class="h-full w-full flex-col items-start">
      <div class="h-10 m-1 sm:m-4 bg-info">
        <Navbar :user="user.nombre" />
      </div>
      <div class="m-2 sm:m-4 bg-green-200">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Sidebar: () => import('../components/dashboard/Sidebar.vue'),
    Navbar: () => import('../components/dashboard/Navbar.vue'),
  },
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
