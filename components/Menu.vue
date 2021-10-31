<template>
  <div
    class="
      absolute
      top-0
      z-20
      flex flex-col
      items-center
      w-full
      h-full
      divide-y
      menu
      -left-0
      bg-light-accent
      dark:bg-dark
      divide-light-primary
      dark:divide-dark-accent
    "
  >
    <div class="flex items-start justify-between w-11/12 mx-4 mt-4 sm:mt-2">
      <div
        class="flex items-center justify-center w-5/12"
        @click="changePage(0)"
      >
        <Logo class="w-full" aria-label="Logo Hipoteca 10"></Logo>
      </div>
      <div class="mr-1 sm:ml-2 sm:mr-8 sm:mt-4">
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
          @click="closeMenu"
        >
          <svg
            class="inline w-6 h-6 text-light-primary dark:text-dark-primary"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="times"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"
          >
            <path
              fill="currentColor"
              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div
      class="flex flex-col items-center justify-start w-11/12 mb-6 ml-4 mr-6"
    >
      <div class="flex items-center justify-start w-full mt-6 mb-4">
        <span class="relative flex mr-4"
          ><svg
            class="inline w-4 h-4 text-light-primary"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="home"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
            ></path></svg
        ></span>
        <div class="flex">
          <a class="cursor-pointer" @click="changePage(0)">
            <h3 class="text-sm font-bold text-light-secondary">Inicio</h3>
          </a>
        </div>
      </div>
      <div class="flex items-center justify-start w-full my-4">
        <span class="relative flex mr-4"
          ><svg
            class="inline w-4 h-4 text-light-primary dark:text-dark-primary"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="wrench"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
            ></path></svg
        ></span>
        <div class="flex">
          <a
            class="cursor-pointer"
            aria-label="Link a sección Nuestro método de trabajo"
            @click="changePage(1)"
          >
            <h3
              class="
                text-sm
                font-bold
                text-light-secondary
                dark:text-dark-accent
              "
            >
              Nuestro Método de Trabajo
            </h3>
          </a>
        </div>
      </div>
      <div class="flex items-center justify-start w-full my-4">
        <span class="relative flex mr-4"
          ><svg
            class="inline w-4 h-4 text-light-primary dark:text-dark-primary"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="key"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"
            ></path></svg
        ></span>
        <div class="flex">
          <a
            class="cursor-pointer"
            aria-label="Link a sección Hipoteca 10"
            @click="changePage(2)"
          >
            <h3
              class="
                text-sm
                font-bold
                text-light-secondary
                dark:text-dark-accent
              "
            >
              Hipoteca 10
            </h3>
          </a>
        </div>
      </div>
      <div class="flex items-center justify-start w-full my-4">
        <span class="relative flex mr-4"
          ><svg
            class="inline w-4 h-4 text-light-primary dark:text-dark-primary"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="hands-helping"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path
              class="text-light-primary dark:text-dark-primary"
              fill="currentColor"
              d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"
            ></path></svg
        ></span>
        <div class="flex">
          <a
            class="cursor-pointer"
            aria-label="Link a sección Nuestro Compromiso"
            @click="changePage(3)"
          >
            <h3
              class="
                text-sm
                font-bold
                text-light-secondary
                dark:text-dark-accent
              "
            >
              Nuestro Compromiso
            </h3>
          </a>
        </div>
      </div>
      <div class="flex items-center justify-start w-full my-4">
        <span class="relative flex mr-4"
          ><svg
            class="inline w-4 h-4 text-light-primary dark:text-dark-primary"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="city"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path
              fill="currentColor"
              d="M616 192H480V24c0-13.26-10.74-24-24-24H312c-13.26 0-24 10.74-24 24v72h-64V16c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v80h-64V16c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v80H24c-13.26 0-24 10.74-24 24v360c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V216c0-13.26-10.75-24-24-24zM128 404c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm128 192c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12V76c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 288c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40z"
            ></path></svg
        ></span>
        <div class="flex">
          <a
            class="cursor-pointer"
            aria-label="Link a sección Empresas"
            @click="changePage(4)"
          >
            <h3
              class="
                text-sm
                font-bold
                text-light-secondary
                dark:text-dark-accent
              "
            >
              Empresas
            </h3>
          </a>
        </div>
      </div>
      <div class="flex items-center justify-start w-full my-4">
        <span class="relative flex mr-4"
          ><svg
            class="inline w-4 h-4 text-light-primary dark:text-dark-primary"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="house-user"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M570.69,236.27,512,184.44V48a16,16,0,0,0-16-16H432a16,16,0,0,0-16,16V99.67L314.78,10.3C308.5,4.61,296.53,0,288,0s-20.46,4.61-26.74,10.3l-256,226A18.27,18.27,0,0,0,0,248.2a18.64,18.64,0,0,0,4.09,10.71L25.5,282.7a21.14,21.14,0,0,0,12,5.3,21.67,21.67,0,0,0,10.69-4.11l15.9-14V480a32,32,0,0,0,32,32H480a32,32,0,0,0,32-32V269.88l15.91,14A21.94,21.94,0,0,0,538.63,288a20.89,20.89,0,0,0,11.87-5.31l21.41-23.81A21.64,21.64,0,0,0,576,248.19,21,21,0,0,0,570.69,236.27ZM288,176a64,64,0,1,1-64,64A64,64,0,0,1,288,176ZM400,448H176a16,16,0,0,1-16-16,96,96,0,0,1,96-96h64a96,96,0,0,1,96,96A16,16,0,0,1,400,448Z"
            ></path></svg
        ></span>
        <div class="flex">
          <a
            class="cursor-pointer"
            aria-label="Link a sección Sobre Nosotros"
            @click="changePage(5)"
          >
            <h3
              class="
                text-sm
                font-bold
                text-light-secondary
                dark:text-dark-accent
              "
            >
              Sobre Nosotros
            </h3>
          </a>
        </div>
      </div>
      <div class="flex items-center justify-start w-full my-4">
        <span class="relative flex mr-4"
          ><svg
            class="inline w-4 h-4 text-light-primary dark:text-dark-primary"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="paper-plane"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
            ></path></svg
        ></span>
        <div class="flex">
          <a
            class="cursor-pointer"
            aria-label="Link a sección de Contacto"
            @click="changePage(6)"
          >
            <h3
              class="
                text-sm
                font-bold
                text-light-secondary
                dark:text-dark-accent
              "
            >
              Contáctanos
            </h3>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  components: {
    Logo: () => import('../components/Logo'),
  },
  methods: {
    closeMenu() {
      this.$emit('closeMenu', false)
    },
    changePage(page) {
      switch (page) {
        case 0:
          this.$router.push('/')
          break
        case 1:
          this.$router.push('/nuestroMetodo')
          break
        case 2:
          this.$router.push('/hipoteca10')
          break
        case 3:
          this.$router.push('/compromiso')
          break
        case 4:
          this.$router.push('/empresas')
          break
        case 5:
          this.$router.push('/nosotros')
          break
        case 6:
          this.$router.push('/contacto')
          break
      }
      setTimeout(() => {
        this.$emit('closeMenu', false)
      }, 200)
    },
  },
}
</script>

<style scoped></style>
