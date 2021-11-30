<template>
  <header class="relative w-full mx-auto">
    <div
      class="
        flex
        items-start
        justify-around
        mx-4
        mt-2
        sm:mt-2
        lg:mt-2
        lg:items-center
      "
    >
      <div class="z-10 w-3/6 sm:w-4/12 sm:ml-4 lg:w-64 sm:mt-2">
        <NuxtLink
          class="
            flex
            items-center
            mr-6
            lg:mr-0
            text-lg
            font-bold
            flex-start
            text-light-primary
            nuxt-link-exact-active nuxt-link-active
          "
          to="/"
          aria-label="Link a Inicio"
        >
          <Logo class="w-full" aria-label="Logo Hipoteca 10"></Logo>
        </NuxtLink>
      </div>
      <div class="z-10 items-center hidden w-9/12 mt-8 lg:flex justify-evenly">
        <div class="div-center">
          <NuxtLink class="text-xs text-light-primary xl:text-base" to="/"
            >Inicio</NuxtLink
          >
        </div>
        <div class="div-center">
          <NuxtLink
            class="text-xs text-light-primary xl:text-base"
            to="nuestroMetodo"
            >Nuestro Método de Trabajo</NuxtLink
          >
        </div>
        <div class="div-center">
          <NuxtLink
            class="text-xs text-light-primary xl:text-base"
            to="hipoteca10"
            >Hipoteca 10</NuxtLink
          >
        </div>
        <div class="div-center">
          <NuxtLink
            class="text-xs text-light-primary xl:text-base"
            to="compromiso"
            >Nuestro Compromiso</NuxtLink
          >
        </div>
        <div class="div-center">
          <NuxtLink
            class="text-xs text-light-primary xl:text-base"
            to="empresas"
            >Empresas</NuxtLink
          >
        </div>
        <div class="div-center">
          <NuxtLink
            class="text-xs text-light-primary xl:text-base"
            to="nosotros"
            >Sobre Nosotros</NuxtLink
          >
        </div>
        <div class="div-center">
          <NuxtLink
            class="text-xs text-light-primary xl:text-base"
            to="contacto"
            >Contáctanos</NuxtLink
          >
        </div>
      </div>
      <div class="z-10 w-2/6 sm:w-4/12 lg:hidden">
        <div class="flex items-start justify-end w-full">
          <button
            class="
              transition-colors
              duration-300
              ease-linear
              text-light-primary
              dark:text-dark-primary
              focus:outline-none
            "
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
    Burger: () => import('../components/icons/Burger'),
    WaveT: () => import('../components/forms/WaveT'),
    Logo: () => import('../components/Logo'),
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
