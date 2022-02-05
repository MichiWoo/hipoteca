<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 z-40 flex flex-col items-center justify-center w-full h-full overflow-x-hidden overflow-y-auto bg-transparent opacity-100"
  >
    <div
      class="relative z-50 w-full mt-6 mb-3 overflow-auto rounded-lg shadow-lg opacity-100 sm:w-2/6 md:w-2/6 h-4/6 bg-light"
    >
      <div class="flex flex-col justify-center align-center">
        <div class="flex justify-between px-5 py-4 border-2 border-light">
          <div>
            <svg
              class="inline w-6 h-6 text-light-secondary"
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
              >Opciones de Cookies</span
            >
          </div>
          <div>
            <button aria-label="Cerrar Modal" @click="closeModal('c')">
              <svg
                class="inline w-6 h-6 transition duration-150 text-light-primary"
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
          Ajuste de las Cookies
        </div>
      </div>
      <div class="flex items-center content-center w-full px-5 py-2">
        <div
          class="text-sm"
          :class="
            $colorMode.value === 'light' ? 'my-tabs-light' : 'my-tabs-dark'
          "
        >
          <ul class="flex flex-wrap cursor-pointer">
            <li
              class="px-2 py-2 rounded-t-lg"
              :class="
                tabActive == 0
                  ? 'bg-light-primary text-light'
                  : 'bg-light text-light-primary'
              "
              @click="tabActive = 0"
            >
              Acerca de las
              <svg
                class="inline w-4 h-4 svg-inline--fa fa-cookie-bite fa-w-16"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="cookie-bite"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0 0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77 54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0 0 57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                ></path>
              </svg>
            </li>
            <li
              class="px-2 py-2 rounded-t-lg"
              :class="
                tabActive == 1
                  ? 'bg-light-primary text-light'
                  : 'bg-light text-light-primary'
              "
              @click="tabActive = 1"
            >
              Necesarias
            </li>
            <li
              class="px-2 py-2 rounded-t-lg"
              :class="
                tabActive == 2
                  ? 'bg-light-primary text-light'
                  : 'bg-light text-light-primary'
              "
              @click="tabActive = 2"
            >
              Marketing
            </li>
            <li
              class="px-2 py-2 rounded-t-lg"
              :class="
                tabActive == 3
                  ? 'bg-light-primary text-light'
                  : 'bg-light text-light-primary'
              "
              @click="tabActive = 3"
            >
              Analíticas
            </li>
          </ul>
        </div>
      </div>
      <div
        v-show="tabActive == 0"
        class="flex flex-col items-center content-center"
      >
        <div class="flex w-full flex-start">
          <div class="px-5 py-2 text-sm font-bold text-light-primary">
            ACERCA DE LAS COOKIES
          </div>
        </div>
        <div class="flex w-full px-5 py-2 flex-start">
          <div class="ml-1 text-xs text-justify text-light-primary">
            La Agencia Española de Protección de Datos y el Comité Europeo de
            Protección de Datos (CEPD) en el segundo semestre de 2020 ha
            revisado las Directrices 05/2020 sobre el consentimiento en la
            navegación web y uso de cookies. Por ello le informamos que:
          </div>
        </div>
        <div class="flex w-full px-5 py-2 flex-start">
          <div class="ml-1 text-xs text-justify text-light-primary">
            Las cookies son pequeños archivos de texto que se almacenan en el
            propio terminal del usuario por el que accede al contenido web y que
            pueden tener distintas finalidades. La ley establece que podemos
            almacenar cookies en tu dispositivo si son estrictamente necesarias
            para el funcionamiento de este sitio. Estas son las llamadas Cookies
            TÉCNICAS. Para todos los demás tipos de cookies, necesitamos tu
            permiso.
          </div>
        </div>
        <div class="flex w-full px-5 py-2 flex-start">
          <div class="ml-1 text-xs text-justify text-light-primary">
            ¿Cómo puedo bloquear o permitir las cookies? La mayoría de los
            navegadores están configurados de forma predeterminada para aceptar
            cookies, no obstante siempre puede modificar su configuración para
            bloquear o eliminar algunas o todas las cookies.
          </div>
        </div>
      </div>
      <div v-show="tabActive == 1" class="flex flex-col w-full">
        <div class="flex flex-start">
          <div class="px-5 py-2 text-sm font-bold text-light-primary">
            Necesarias
          </div>
        </div>
        <div class="flex px-5 py-2 flex-start">
          <div class="ml-1 text-xs text-justify text-light-primary">
            Siempre Activas
          </div>
        </div>
        <div class="w-full my-2 div-center">
          <div
            class="flex flex-col justify-center w-5/6 px-6 py-3 rounded-lg bg-light-accent"
          >
            <div class="flex items-start content-start justify-start">
              <div class="flex text-sm flex-start text-light-primary">
                Nombre:
              </div>
              <div
                class="flex ml-2 text-sm font-bold flex-start text-light-secondary"
              >
                vercookies
              </div>
            </div>
            <div class="flex items-start content-start justify-start">
              <div class="flex text-sm flex-start text-light-primary">
                Servidor:
              </div>
              <div class="flex ml-2 text-sm flex-start text-light-secondary">
                hipoteca10.es
              </div>
            </div>
            <div class="flex items-start content-start justify-start">
              <div class="flex text-sm flex-start text-light-primary">
                Finalidad:
              </div>
              <div
                class="flex ml-2 text-sm text-justify flex-start text-light-secondary"
              >
                Esta cookie se utiliza para mostrar la información de la
                política de cookies
              </div>
            </div>
            <div class="flex items-start content-start justify-start">
              <div class="flex text-sm flex-start text-light-primary">
                Caducidad:
              </div>
              <div class="flex ml-2 text-sm flex-start text-light-secondary">
                2 meses
              </div>
            </div>
          </div>
        </div>
        <div class="w-full my-2 div-center">
          <div
            class="flex flex-col justify-center w-5/6 px-6 py-3 rounded-lg bg-light-accent"
          >
            <div class="flex items-start content-start justify-start">
              <div class="flex text-sm flex-start text-light-primary">
                Nombre:
              </div>
              <div
                class="flex ml-2 text-sm font-bold flex-start text-light-secondary"
              >
                preferencesCookies
              </div>
            </div>
            <div class="flex items-start content-start justify-start">
              <div class="flex text-sm flex-start text-light-primary">
                Servidor:
              </div>
              <div class="flex ml-2 text-sm flex-start text-light-secondary">
                hipoteca10.es
              </div>
            </div>
            <div class="flex items-start content-start justify-start">
              <div class="flex text-sm flex-start text-light-primary">
                Finalidad:
              </div>
              <div
                class="flex ml-2 text-sm text-justify flex-start text-light-secondary"
              >
                Cookie necesaria que registra sus preferencias y consentimientos
                de cookies según valores de la sección AJUSTES.
              </div>
            </div>
            <div class="flex items-start content-start justify-start">
              <div class="flex text-sm flex-start text-light-primary">
                Caducidad:
              </div>
              <div class="flex ml-2 text-sm flex-start text-light-secondary">
                2 meses
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-show="tabActive == 2"
        class="flex flex-col items-center content-center"
      >
        <div class="flex w-full justifi-around">
          <div class="px-5 py-2 text-sm font-bold text-light-primary">
            MARKETING
          </div>
          <div class="px-5 py-2 text-sm font-bold text-light-primary">
            <div
              class="flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 border-2 rounded bg-light text-light-primary border-light-primary focus-within:border-light-accent"
            >
              <input
                v-model="marketing"
                class="absolute opacity-0"
                type="checkbox"
              /><svg
                class="hidden w-4 h-4 pointer-events-none fill-accent"
                viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="flex w-full px-5 py-2 flex-start">
          <div class="ml-1 text-xs text-justify text-light-primary">
            Las cookies de marketing se utilizan para rastrear a los visitantes
            a través de las webs. La intención es mostrar anuncios que sean
            relevantes y atractivos para el usuario individual y, por tanto, más
            valiosos para los editores y los anunciantes de terceros.
          </div>
        </div>
      </div>
      <div
        v-show="tabActive == 3"
        class="flex flex-col items-center content-center"
      >
        <div class="flex w-full flex-start">
          <div class="px-5 py-2 text-sm font-bold text-light-primary">
            ANALÍTICAS
          </div>
          <div class="px-5 py-2 text-sm font-bold text-light-primary">
            <div
              class="flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 border-2 rounded bg-light text-light-primary border-light-primary focus-within:border-light-accent"
            >
              <input
                v-model="analitics"
                class="absolute opacity-0"
                type="checkbox"
              /><svg
                class="hidden w-4 h-4 pointer-events-none fill-accent"
                viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="flex w-full px-5 py-2 flex-start">
          <div
            class="ml-1 text-xs text-justify text-light-primary dark:text-dark-primary"
          >
            Las cookies de análisis ayudan a los propietarios de las webs a
            comprender cómo interactúan los visitantes con las webs recopilando
            y facilitando información de forma anónima.
          </div>
        </div>
      </div>
      <div class="w-full my-6 div-center">
        <div class="w-5/6 div-center">
          <ButtonSubmit
            text="Guardar y Aceptar"
            @clicked="clicked"
          ></ButtonSubmit>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalCookies',
  components: {
    ButtonSubmit: () => import('../components/ButtonSubmit'),
  },
  props: {
    dataCookies: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      tabActive: 0,
      marketing: false,
      analitics: false,
    }
  },
  watch: {
    dataCookies() {
      this.marketing = this.dataCookies.marketing
      this.analitics = this.dataCookies.analitics
    },
  },
  mounted() {
    if (Object.keys(this.dataCookies).length > 0) {
      this.marketing = this.dataCookies.marketing
      this.analitics = this.dataCookies.analitics
    }
  },
  methods: {
    closeModal(acc) {
      const objCookie = {
        action: 'c',
        marketing: this.marketing,
        analitics: this.analitics,
      }
      this.$emit('closeModalCookies', objCookie)
    },
    clicked() {
      const objCookie = {
        action: 'ok',
        marketing: this.marketing,
        analitics: this.analitics,
      }
      this.$emit('closeModalCookies', objCookie)
    },
  },
}
</script>

<style scoped>
.my-tabs-light {
  border-bottom: 2px solid #5555ca;
}
.my-tabs-dark {
  border-bottom: 2px solid #09e1fd;
}
input:checked + svg {
  display: block;
}
</style>
