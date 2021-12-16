<template>
  <div class="flex flex-col items-center justify-center w-full my-6 sm:my-2">
    <div
      class="
        flex flex-col
        items-start
        w-10/12
        sm:w-9/12
        md:w-9/12
        lg:w-11/12
        justity-between
        sm:flex-row
        sm:justify-around
        sm:mb-2
        md:justify-around
        md:mb-2
        mt-4
      "
    >
      <div class="flex-col justify-center item-center">
        <div class="flex justify-center sm:justify-start my-8 sm:w-5/6">
          <h1
            class="
              text-2xl
              font-bold
              text-light-secondary
              dark:text-dark-accent
              sm:text-4xl
              text-center
              sm:text-left
            "
          >
            Hipoteca 80
          </h1>
        </div>
        <div class="justify-start mb-2 sm:mb-12 sm:flex md:flex">
          <h2
            class="
              text-base
              font-bold
              text-light-primary
              dark:text-dark-accent
              sm:text-xl
              text-center
              sm:text-left
            "
          >
            SIN COSTE DE GESTIÓN.
          </h2>
        </div>
        <div
          class="
            flex
            items-start
            justify-around
            sm:justify-start
            w-full
            text-light-primary text-base text-bold
            sm:text-xl
          "
        >
          Solicita tu Estudio, sin Compromiso!
        </div>
        <div
          class="items-center justify-around hidden w-3/6 mt-8 sm:flex sm:w-5/6"
        >
          <a
            class="
              w-5/6
              p-2
              text-base text-center
              rounded-lg
              sm:p-4
              md:p-4
              bg-light-accent
              dark:bg-dark-accent
              border-light-accent
              dark:border-text-dark-accent
              text-light
              sm:text-xl
              dark:text-dark-text
              hover:bg-light-accent
              hover:ring-2 hover:ring-light-accent hover:ring-opacity-50
            "
            href="tel:+34910758169"
            aria-label="Botón CTA"
          >
            <span class="font-bold text-light-secondary">ó Llámanos al </span>
            <svg
              class="
                relative
                inline-flex
                w-6
                h-4
                rounded-full
                bg-light-transparent
                text-light-secondary
                dark:text-dark-secondary
                svg-inline--fa
                fa-phone-alt fa-w-16
              "
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="phone-alt"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
              ></path></svg
            ><span
              class="font-bold text-light-secondary dark:text-dark-secondary"
              >910758169</span
            >
          </a>
        </div>
        <div
          class="
            items-center
            justify-around
            hidden
            w-11/12
            mt-6
            div-center
            sm:hidden
            md:hidden
          "
        >
          <a
            class="
              w-full
              p-2
              text-base text-center
              rounded-lg
              sm:p-4
              md:p-4
              bg-light-accent
              dark:bg-dark-accent
              border-light-accent
              dark:border-text-dark-accent
              text-light
              sm:text-xl
              dark:text-dark-text
              hover:bg-light-accent
              hover:ring-2 hover:ring-light-accent hover:ring-opacity-50
            "
            href="tel:+34910758169"
            aria-label="Botón CTA"
          >
            <span class="font-bold text-light-secondary">ó Llámanos al </span>
            <svg
              class="
                relative
                inline-flex
                w-6
                h-4
                rounded-full
                bg-light-transparent
                text-light-secondary
                dark:text-dark-secondary
                svg-inline--fa
                fa-phone-alt fa-w-16
              "
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="phone-alt"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
              ></path></svg
            ><span
              class="font-bold text-light-secondary dark:text-dark-secondary"
              >910758169</span
            >
          </a>
        </div>
      </div>
      <div class="flex items-start justify-center w-full sm:w-3/6">
        <Formulario @openModal="openModal" />
      </div>
    </div>

    <div class="w-11/12 my-6 div-center sm:hidden md:hidden">
      <div class="flex flex-col items-center justify-center">
        <div class="flex content-start justify-center items-strech">
          <div
            class="flex justify-center w-3/6 mb-3 cursor-pointer"
            @click="scroll('h100')"
          >
            <div
              class="
                flex flex-col
                justify-between
                w-full
                p-4
                mx-2
                rounded-md
                shadow-lg
                bg-light-accent
                dark:bg-dark-accent
                h-52
                md:w-1/3
                hover:shadow-md
              "
            >
              <h3
                class="
                  text-lg
                  font-black
                  tracking-wide
                  text-light-secondary
                  dark:text-dark-secondary
                "
              >
                Hipoteca 100%
              </h3>
              <div
                class="
                  block
                  overflow-hidden
                  text-sm
                  font-normal
                  leading-7
                  break-words
                  text-light-secondary
                  max-h-14
                  overflow-ellipsis
                  dark:text-dark-secondary
                "
              >
                Para conseguir el 100% de la Compra Venta.
              </div>
            </div>
          </div>
          <div
            class="flex justify-center w-3/6 mb-3 cursor-pointer"
            @click="scroll('hsue')"
          >
            <div
              class="
                flex flex-col
                justify-between
                w-full
                p-4
                mx-2
                rounded-md
                shadow-lg
                bg-light
                dark:bg-dark
                h-52
                md:w-1/3
                hover:shadow-md
              "
            >
              <h3
                class="
                  text-lg
                  font-black
                  tracking-wide
                  text-light-secondary
                  dark:text-dark-secondary
                "
              >
                Hipoteca Autopromotor
              </h3>
              <div
                class="
                  block
                  overflow-hidden
                  text-sm
                  font-normal
                  leading-7
                  break-words
                  text-light-primary
                  max-h-14
                  overflow-ellipsis
                  dark:text-dark-primary
                "
              >
                Para construir la casa de tus sueños.
              </div>
            </div>
          </div>
        </div>
        <div class="flex content-start justify-center items-strech">
          <button
            class="flex justify-center w-3/6 mb-3 cursor-pointer"
            aria-label="Botón Hipoteca Funcionario"
            @click="scroll('hfun')"
          >
            <div
              class="
                flex flex-col
                justify-between
                w-full
                p-4
                mx-2
                rounded-md
                shadow-lg
                bg-light
                dark:bg-dark
                h-52
                md:w-1/3
                hover:shadow-md
              "
            >
              <h3
                class="
                  text-lg
                  font-black
                  tracking-wide
                  text-light-secondary
                  dark:text-dark-secondary
                "
              >
                Hipoteca Funcionario
              </h3>
              <div
                class="
                  block
                  overflow-hidden
                  text-sm
                  font-normal
                  leading-7
                  break-words
                  text-light-primary
                  max-h-14
                  overflow-ellipsis
                  dark:text-dark-primary
                "
              >
                Posibilidad 100% de Tasación.
              </div>
            </div>
          </button>
          <button
            class="flex justify-center w-3/6 mb-3 cursor-pointer"
            aria-label="Botón Hipoteca sin blanca"
            @click="scroll('hsbla')"
          >
            <div
              class="
                flex flex-col
                justify-between
                w-full
                p-4
                mx-2
                rounded-md
                shadow-lg
                bg-light-accent
                dark:bg-dark-accent
                h-52
                md:w-1/3
                hover:shadow-md
              "
            >
              <h3
                class="
                  text-lg
                  font-black
                  tracking-wide
                  text-light-secondary
                  dark:text-dark-secondary
                "
              >
                Hipoteca sin Blanca
              </h3>
              <div
                class="
                  block
                  overflow-hidden
                  text-sm
                  font-normal
                  leading-7
                  break-words
                  text-light-secondary
                  max-h-14
                  overflow-ellipsis
                  dark:text-dark-secondary
                "
              >
                Posibilidad de financiar el 100% de la compra más los gastos.
              </div>
            </div>
          </button>
        </div>
        <div class="flex content-start justify-center items-strech">
          <button
            class="flex justify-center w-3/6 mb-3 cursor-pointer"
            aria-label="Botón Hipoteca Cambio de Vida"
            @click="scroll('hcvid')"
          >
            <div
              class="
                flex flex-col
                justify-between
                w-full
                p-4
                mx-2
                rounded-md
                shadow-lg
                bg-light-primary
                dark:bg-dark-primary
                h-52
                md:w-1/3
                hover:shadow-md
              "
            >
              <h3
                class="
                  text-lg
                  font-black
                  tracking-wide
                  text-light
                  dark:text-dark
                "
              >
                Hipoteca cambio de Vida
              </h3>
              <div
                class="
                  block
                  overflow-hidden
                  text-sm
                  font-normal
                  leading-7
                  break-words
                  text-light
                  max-h-14
                  overflow-ellipsis
                  dark:text-dark
                "
              >
                Por si tu banco no te quiere lo suficiente.
              </div>
            </div>
          </button>
          <button
            class="flex justify-center w-3/6 mb-3 cursor-pointer"
            aria-label="Botón Hipoteca Casa de mis sueños"
            @click="scroll('h80')"
          >
            <div
              class="
                flex flex-col
                justify-between
                w-full
                p-4
                mx-2
                rounded-md
                shadow-lg
                bg-light-primary
                dark:bg-dark-primary
                h-52
                md:w-1/3
                hover:shadow-md
              "
            >
              <h3
                class="
                  text-lg
                  font-black
                  tracking-wide
                  text-light
                  dark:text-dark
                "
              >
                Hipoteca 80
              </h3>
              <div
                class="
                  block
                  overflow-hidden
                  text-sm
                  font-normal
                  leading-7
                  break-words
                  text-light
                  max-h-14
                  overflow-ellipsis
                  dark:text-dark
                "
              >
                Sin coste de gestión.
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div
      class="
        hidden
        w-11/12
        my-6
        sm:flex
        sm:justify-center
        sm:flex-wrap
        md:flex
        md:justify-center
        md:flex-wrap
      "
    >
      <div class="flex justify-center w-3/12 mb-3 cursor-pointer lg:h-48">
        <div
          class="
            flex flex-col
            justify-between
            w-full
            p-8
            mx-2
            my-4
            text-center
            rounded-md
            shadow-lg
            bg-light-accent
            dark:bg-dark-accent
            hover:shadow-md
          "
          @click="scroll('h100')"
        >
          <h3
            class="
              text-lg
              font-black
              tracking-wide
              text-light-secondary
              dark:text-dark-secondary
            "
          >
            Hipoteca 100%
          </h3>
          <div
            class="
              block
              overflow-hidden
              text-sm
              font-normal
              leading-7
              break-words
              text-light-secondary
              max-h-14
              overflow-ellipsis
              dark:text-dark-secondary
            "
          >
            Para conseguir el 100% de la Compra Venta.
          </div>
        </div>
      </div>
      <div class="flex justify-center w-3/12 mb-3 cursor-pointer lg:h-48">
        <div
          class="
            flex flex-col
            justify-between
            w-full
            p-8
            mx-2
            my-4
            text-center
            rounded-md
            shadow-lg
            bg-light
            dark:bg-dark
            hover:shadow-md
          "
          @click="scroll('hsue')"
        >
          <h3
            class="
              text-lg
              font-black
              tracking-wide
              text-light-secondary
              dark:text-dark-secondary
            "
          >
            Hipoteca Autopromotor
          </h3>
          <div
            class="
              block
              overflow-hidden
              text-sm
              font-normal
              leading-7
              break-words
              text-light-primary
              max-h-14
              overflow-ellipsis
              dark:text-dark-primary
            "
          >
            Para construir la casa de tus sueños.
          </div>
        </div>
      </div>
      <div class="flex justify-center w-3/12 mb-3 cursor-pointer lg:h-48">
        <div
          class="
            flex flex-col
            justify-between
            w-full
            p-8
            mx-2
            my-4
            text-center
            rounded-md
            shadow-lg
            bg-light
            dark:bg-dark
            hover:shadow-md
          "
          @click="scroll('hfun')"
        >
          <h3
            class="
              text-lg
              font-black
              tracking-wide
              text-light-secondary
              dark:text-dark-secondary
            "
          >
            Hipoteca Funcionario
          </h3>
          <div
            class="
              block
              overflow-hidden
              text-sm
              font-normal
              leading-7
              break-words
              text-light-primary
              max-h-14
              overflow-ellipsis
              dark:text-dark-primary
            "
          >
            Posibilidad 100% de Tasación.
          </div>
        </div>
      </div>
      <div class="flex justify-center w-3/12 mb-3 cursor-pointer lg:h-48">
        <div
          class="
            flex flex-col
            justify-between
            w-full
            p-8
            mx-2
            my-4
            text-center
            rounded-md
            shadow-lg
            bg-light-accent
            dark:bg-dark-accent
            hover:shadow-md
          "
          @click="scroll('hsbla')"
        >
          <h3
            class="
              text-lg
              font-black
              tracking-wide
              text-light-secondary
              dark:text-dark-secondary
            "
          >
            Hipoteca sin Blanca
          </h3>
          <div
            class="
              block
              overflow-hidden
              text-sm
              font-normal
              leading-7
              break-words
              text-light-secondary
              max-h-14
              overflow-ellipsis
              dark:text-dark-secondary
            "
          >
            Posibilidad de financiar el 100% de la compra más los gastos.
          </div>
        </div>
      </div>
      <div class="flex justify-center w-3/12 mb-3 cursor-pointer lg:h-48">
        <div
          class="
            flex flex-col
            justify-between
            w-full
            p-8
            mx-2
            my-4
            text-center
            rounded-md
            shadow-lg
            bg-light-primary
            dark:bg-dark-primary
            hover:shadow-md
          "
          @click="scroll('hcvid')"
        >
          <h3
            class="text-lg font-black tracking-wide text-light dark:text-dark"
          >
            Hipoteca cambio de Vida
          </h3>
          <div
            class="
              block
              overflow-hidden
              text-sm
              font-normal
              leading-7
              break-words
              text-light
              max-h-14
              overflow-ellipsis
              dark:text-dark
            "
          >
            Por si tu banco no te quiere lo suficiente.
          </div>
        </div>
      </div>
      <div class="flex justify-center w-3/12 mb-3 cursor-pointer lg:h-48">
        <div
          class="
            flex flex-col
            justify-between
            w-full
            p-8
            mx-2
            my-4
            text-center
            rounded-md
            shadow-lg
            bg-light-primary
            dark:bg-dark-primary
            hover:shadow-md
          "
          @click="scroll('h80')"
        >
          <h3
            class="text-lg font-black tracking-wide text-light dark:text-dark"
          >
            Hipoteca 80
          </h3>
          <div
            class="
              block
              overflow-hidden
              text-sm
              font-normal
              leading-7
              break-words
              text-light
              max-h-14
              overflow-ellipsis
              dark:text-dark
            "
          >
            Sin coste de gestión.
          </div>
        </div>
      </div>
    </div>
    <div class="w-11/12 my-12 div-center">
      <div
        class="
          w-full
          h-1
          bg-light-primary
          dark:bg-dark-primary
          border-1 border-light-primary
          dark:border-dark-primary
        "
      ></div>
    </div>
    <div class="w-11/12 mb-12 sm:w-2/6 md:w-2/6 div-center">
      <nuxt-img
        provider="static"
        sizes="sm:200px md:400px lg:800px"
        src="/insurance.svg"
        alt="Imágen de una casa"
        loading="lazy"
        width="1024"
        height="800"
        quality="75"
      />
    </div>
    <div class="flex-col w-full div-center">
      <CardProducto
        v-for="p in productos"
        :ref="p.ref"
        :key="p.id"
        :producto="p"
      ></CardProducto>
    </div>
    <div class="w-11/12 my-12 div-center">
      <div
        class="
          w-full
          h-1
          bg-light-primary
          dark:bg-dark-primary
          border-1 border-light-primary
          dark:border-dark-primary
        "
      ></div>
    </div>
    <div class="w-11/12 my-12 text-center div-center">
      <span class="text-lg font-semibold text-light-primary"
        >(*) Todas las ofertas están sujetas a aprobación bancaria, por alguna
        de las entidades con las que colaboramos.</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    CardProducto: () => import('./CardProducto'),
    Formulario: () => import('./Formulario.vue'),
  },
  data() {
    return {
      productos: [
        {
          id: 1,
          ref: 'h100',
          title: 'Hipoteca 100% (*)',
          type: 'accent',
          link: '/hipoteca100',
          data: [
            { id: 1, text: 'Hasta el 100% del valor de la compra venta.' },
            { id: 2, text: 'Solo necesitas aportar los gastos.' },
            {
              id: 3,
              text: 'Te acompañamos durante todo el proceso de la tramitación.',
            },
            { id: 4, text: 'Cobramos a éxito.' },
            {
              id: 5,
              text: 'Dependiendo del perfil, posibilidad de conseguir 100% de CV, 90% de Tasación.',
            },
          ],
        },
        {
          id: 2,
          ref: 'h80',
          title: 'Hipoteca 80% (*)',
          type: 'primary',
          link: '/hipoteca80',
          data: [
            {
              id: 1,
              text: 'Si buscas que alguien te acompañe en el proceso de la búsqueda de la hipoteca que mejor encaje con tu perfil.',
            },
            { id: 2, text: 'Sin coste de tramitación por nuestra parte.' },
            {
              id: 3,
              text: 'Pensada para operaciones en las que solo se necesite el 80% de CV o de Tasación, el menor de los dos.',
            },
            {
              id: 4,
              text: 'Olvídate de que te llamen de 15 bancos distintos, un gestor personal para tu operación.',
            },
            {
              id: 5,
              text: 'Gestión personalizada sin coste.',
            },
          ],
        },
        {
          id: 3,
          ref: 'hfun',
          title: 'Hipoteca Funcionario 100% (*)',
          type: 'white',
          link: '/hipoteca-funcionario',
          data: [
            {
              id: 1,
              text: 'Para conseguir las mejores condiciones con un servicio personalizado, y adaptándose a todas las necesidades de financiación que necesites.',
            },
            {
              id: 2,
              text: 'Posibilidad de 100% de Compra Venta o 100% de valor de Tasación (El menor de los dos).',
            },
            {
              id: 3,
              text: '100% de Compra venta en segunda residencia.',
            },
            {
              id: 4,
              text: 'Sin coste de gestión, si tu necesidad de financiación es inferior al 90% de la CV o 80% de Tasación.',
            },
          ],
        },
        {
          id: 4,
          ref: 'hsbla',
          title: 'Hipoteca sin Blanca',
          type: 'primary',
          link: '/hipoteca-sin-blanca',
          data: [
            {
              id: 1,
              text: 'Para aquellas compras de casa, donde no se tiene nada ahorrado.',
            },
            {
              id: 2,
              text: 'Necesidad de un doble garantia para poder sacar la operación.',
            },
            {
              id: 3,
              text: 'Hipoteca por el importe del 100% de la Compra venta y los gastos asociados a la compra ( ITP o IVA, notaria, registro, gestoría de la escritura de Compra).',
            },
            {
              id: 4,
              text: 'Nuestro acompañamiento dura todo el proceso, solo pagas si firmas.',
            },
          ],
        },
        {
          id: 5,
          ref: 'hcvid',
          title: 'Hipoteca Cambio de Vida (*)',
          type: 'accent',
          link: '/hipoteca-cambio-de-vida',
          data: [
            { id: 1, text: 'Si quieres cambiar de banco.' },
            { id: 2, text: 'Si quieres mejorar condiciones.' },
            { id: 3, text: 'Si quieres buscar menos productos bonificados.' },
            {
              id: 4,
              text: 'Si quieres incluir algún préstamo en la hipoteca.',
            },
            {
              id: 5,
              text: 'Pensada, para operaciones de financiación hasta el 80% de la tasación.',
            },
            {
              id: 6,
              text: 'Coste de tramitación ajustado a tu perfil, pudiendo ser totalmente gratuita nuestra gestión.',
            },
          ],
        },
        {
          id: 6,
          ref: 'hsue',
          title: 'Hipoteca Autopromotor (*)',
          type: 'white',
          link: '/hipoteca-autopromotor',
          data: [
            {
              id: 1,
              text: 'Hipoteca auto construcción.',
            },
            {
              id: 2,
              text: 'Con los máximos porcentajes del mercado.',
            },
            {
              id: 3,
              text: 'Sin necesidad de que tengas comprado el suelo.',
            },
            {
              id: 4,
              text: 'Sabemos de la complejidad de este tipo de operaciones, y somos especialistas en ellas.',
            },
            {
              id: 5,
              text: 'Y si estas perdido, trabajamos que colaboradores que te ayudan con la búsqueda del suelo, del arquitecto, las licencias del ayuntamiento, y demás cuestiones básicas de este tipo de proyectos.',
            },
          ],
        },
      ],
      intervalo: null,
      showWoman: true,
      showMan: false,
    }
  },
  created() {
    this.activarIntervalo()
  },
  beforeDestroy() {
    clearInterval(this.intervalo)
  },
  methods: {
    activarIntervalo() {
      this.intervalo = setInterval(() => {
        this.showWoman = !this.showWoman
        this.showMan = !this.showMan
      }, 10000)
    },
    scroll(where) {
      this.$refs[where][0].$el.scrollIntoView({ behavior: 'smooth' })
    },
    goToForm() {
      this.$store.commit('goToForm', true)
    },

    openModal() {
      this.$emit('openModal', true)
    },
  },
}
</script>

<style lang="css" scoped>
.slide-fade-enter-active {
  opacity: 0;
}
.slide-fade-leave-active {
  opacity: 0;
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
.slide-fade2-enter-active {
  opacity: 0;
}
.slide-fade2-leave-active {
  opacity: 0;
}
.slide-fade2-enter,
.slide-fade2-leave-to {
  opacity: 0;
}
</style>
