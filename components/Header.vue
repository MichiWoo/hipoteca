<template>
  <header class="relative w-full mx-auto">
    <div
      class="flex items-start justify-around mx-4 mt-4 sm:mt-2 lg:mt-6 lg:items-center"
    >
      <div class="z-10 w-3/6 sm:w-4/12 lg:w-2/12 sm:mt-4 lg:ml-12">
        <NuxtLink
          class="flex items-center mr-6 text-lg font-bold flex-start text-light-primary dark:text-dark-accent nuxt-link-exact-active nuxt-link-active"
          to="/"
          aria-label="Link a Inicio"
        >
          <Logo class="w-full" alt="Logo Hipoteca10"></Logo>
        </NuxtLink>
      </div>
      <div class="z-10 items-center hidden w-9/12 mt-8 lg:flex justify-evenly">
        <div class="div-center">
          <NuxtLink class="text-base text-light-primary" to="/"
            >Inicio</NuxtLink
          >
        </div>
        <div class="div-center">
          <NuxtLink class="text-base text-light-primary" to="nuestroMetodo"
            >Nuestro Método de Trabajo</NuxtLink
          >
        </div>
        <div class="div-center">
          <NuxtLink class="text-base text-light-primary" to="hipoteca10"
            >Hipoteca 10</NuxtLink
          >
        </div>
        <div class="div-center">
          <NuxtLink class="text-base text-light-primary" to="compromiso"
            >Nuestro Compromiso</NuxtLink
          >
        </div>
        <div class="div-center">
          <NuxtLink class="text-base text-light-primary" to="empresas"
            >Empresas</NuxtLink
          >
        </div>
        <div class="div-center">
          <NuxtLink class="text-base text-light-primary" to="nosotros"
            >Sobre Nosotros</NuxtLink
          >
        </div>
        <div class="div-center">
          <NuxtLink class="text-base text-light-primary" to="contacto"
            >Contáctanos</NuxtLink
          >
        </div>
      </div>
      <div
        class="z-10 flex items-center justify-center w-1/6 h-8 lg:justify-center sm:justify-end sm:w-3/12 lg:w-1/12 sm:mt-8"
      >
        <Checkbox
          aria-label="Checkbox cambiar Modo Oscuro"
          @changeMode="toggle"
        ></Checkbox>
      </div>
      <div class="z-10 w-2/6 sm:w-4/12 lg:hidden">
        <div class="flex items-start justify-end w-full">
          <button
            class="transition-colors duration-300 ease-linear text-light-primary dark:text-dark-primary focus:outline-none"
            aria-label="Botón Menú"
            @click="showMenu"
          >
            <Burger class="inline w-6 h-6" alt="Icono Menú"></Burger>
          </button>
        </div>
      </div>
    </div>
    <div class="absolute left-0 z-0 w-full h-full -top-4">
      <WaveT class="w-full h-full" alt="Imagen Forma de arriba" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {
    Logo: () => import('../components/Logo'),
    Burger: () => import('../components/icons/Burger'),
    Checkbox: () => import('../components/Checkbox'),
    WaveT: () => import('../components/forms/WaveT'),
  },
  methods: {
    toggle(val) {
      this.$colorMode.preference = val
    },
    showMenu() {
      this.$emit('showMenu', true)
    },
  },
}
</script>

<style lang="css" scoped></style>
