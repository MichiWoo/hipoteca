<template>
  <div
    class="
      fixed
      top-0
      bottom-0
      left-0
      right-0
      z-40
      flex flex-col
      items-center
      justify-center
      w-full
      h-full
      overflow-x-hidden overflow-y-auto
      bg-transparent
      opacity-100
    "
  >
    <div
      class="
        relative
        z-50
        w-full
        mt-6
        mb-3
        overflow-auto
        rounded-lg
        shadow-lg
        opacity-100
        sm:w-2/6
        h-4/6
        sm:h-2/6
        md:h-2/6
        bg-light
      "
    >
      <div class="flex flex-col justify-center align-center">
        <div class="flex justify-between px-5 py-4 border-2 border-light">
          <div>
            <svg
              class="
                inline
                w-6
                h-6
                text-light-secondary
                svg-inline--fa
                fa-exclamation-triangle fa-w-18
              "
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="exclamation-triangle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
              ></path></svg
            ><span class="text-base font-bold text-light-secondary"
              >Cookies</span
            >
          </div>
          <div>
            <button aria-label="Cerrar Modal" @click="closeModal('c')">
              <svg
                class="
                  inline
                  w-6
                  h-6
                  transition
                  duration-150
                  text-light-primary
                "
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="times-circle"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="flex w-full flex-start">
        <div class="px-5 py-2 text-sm font-bold text-light-primary">
          Cookies
        </div>
      </div>
      <div class="flex w-full px-5 py-2 flex-start">
        <div class="ml-1 text-xs text-justify text-light-primary">
          Utilizamos cookies propias y de terceros para fines analíticos y para
          mostrarle publicidad personalizada en base a un perfil elaborado según
          sus hábitos de navegación (p.e. páginas visitadas).
        </div>
      </div>
      <div class="flex w-full px-5 py-2 flex-start">
        <div class="ml-1 text-xs text-justify text-light-primary">
          Más información y configuración de éstas en la opción de AJUSTES.
        </div>
      </div>
      <div class="my-6 div-center">
        <div class="flex items-center justify-end">
          <div class="mx-1 div-center">
            <button
              class="
                p-1
                text-sm
                rounded-lg
                sm:px-4
                sm:py-2
                md:px-4
                md:py-2
                bg-light-primary
                border-light-accent
                text-light
                hover:bg-light-accent
                hover:ring-2 hover:ring-light-accent hover:ring-opacity-50
              "
              aria-label="Botón Aceptar Cookies"
              @click="aceptarCookies"
            >
              Aceptar Todas
            </button>
          </div>
          <div class="mx-1 div-center">
            <button
              class="
                p-1
                text-sm
                rounded-lg
                sm:px-4
                sm:py-2
                md:px-4
                md:py-2
                bg-light-danger
                border-light-danger
                dark:border-text-dark-danger
                text-light
                hover:bg-light-primary
                hover:ring-2 hover:ring-light-primary hover:ring-opacity-50
              "
              aria-label="Botón Rechazar Cookies"
              @click="rechazarCookies"
            >
              Rechazar Todas
            </button>
          </div>
          <div class="mx-1 div-center">
            <button
              class="
                p-1
                text-sm
                rounded-lg
                sm:px-4
                sm:py-2
                md:px-4
                md:py-2
                bg-light-accent
                border-light-accent
                dark:border-text-dark-accent
                text-light-primary
                hover:bg-light-accent
                hover:ring-2 hover:ring-light-accent hover:ring-opacity-50
              "
              aria-label="Botón Ajustes de Cookies"
              @click="ajustesCookies"
            >
              Ajustes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalCookiesAll',
  methods: {
    aceptarCookies() {
      this.$emit('closeModalCookiesAll', 'ok')
    },
    rechazarCookies() {
      this.$emit('closeModalCookiesAll', 'no')
    },
    ajustesCookies() {
      this.$emit('closeModalCookiesAll', 'aj')
    },
    closeModal() {
      this.$emit('closeModalCookiesAll', 'c')
    },
  },
}
</script>

<style scoped></style>
