<template>
  <div>
    <Menu v-show="showMenuDialog" @closeMenu="closeMenu" />
    <Header @showMenu="showMenu" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('../components/Header'),
    Footer: () => import('../components/Footer'),
    Menu: () => import('../components/Menu'),
  },
  data() {
    return {
      showMenuDialog: false,
    }
  },
  methods: {
    showMenu(val) {
      this.showMenuDialog = val
    },
    closeMenu(val) {
      this.showMenuDialog = val
    },
  },
}
</script>

<style></style>
