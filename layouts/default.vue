<template>
  <div>
    <ModalTerminos v-show="showModal" @closeModal="closeModal" />
    <Menu v-show="showMenuDialog" @closeMenu="closeMenu" />
    <Header @showMenu="showMenu" />
    <Nuxt />
    <Formulario :acepta-term="aceptaTerm" @openModal="openModal" />
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('../components/Header'),
    Footer: () => import('../components/Footer'),
    Menu: () => import('../components/Menu'),
    Formulario: () => import('../components/Formulario'),
    ModalTerminos: () => import('../components/ModalTerminos'),
  },
  data() {
    return {
      showMenuDialog: false,
      showModal: false,
      aceptaTerm: false,
    }
  },
  methods: {
    showMenu(val) {
      this.showMenuDialog = val
    },
    closeMenu(val) {
      this.showMenuDialog = val
    },
    openModal(val) {
      this.showModal = val
    },
    closeModal(val) {
      this.showModal = false
      if (val === 'ok') {
        this.aceptaTerm = true
      } else {
        this.aceptaTerm = false
      }
    },
  },
}
</script>

<style></style>
