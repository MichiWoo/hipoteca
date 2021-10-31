<template>
  <div class="flex flex-col items-center justify-center w-11/12 my-6 sm:my-2">
    <div
      id="contenido"
      class="flex flex-col md:flex-row justify-center items-center mb-6"
    >
      <div
        class="
          flex flex-col
          justify-center
          item-center
          w-full
          lg:w-9/12
          text-justify
        "
      >
        <div class="flex justify-center sm:justify-start my-8 sm:w-5/6">
          <h1
            class="
              text-2xl
              font-bold
              text-light-secondary
              sm:text-4xl
              text-justify
              sm:text-left
            "
          >
            Hipoteca Funcionario
          </h1>
        </div>
        <div
          class="
            flex
            items-start
            justify-around
            sm:justify-start
            w-full
            text-light-primary text-sm text-bold text-justify
            md:text-justify
            mb-2
          "
        >
          <ul class="list-disc">
            <li>
              HASTA EL 100% DEL VALOR DE COMPRA O 100% DEL VALOR DE TASACION, EL
              MENOR DE LOS DOS.
            </li>
            <li>
              TIPOS DE INTERES PREFRENCIALES, ADAPTANDO LA OFERTA AL PERFIL DEL
              CLIENTE.
            </li>
            <li>
              PARA PRESTAMO AUTO PROMOTOR, POSIBILIDAD DE 100% DEL COSTE DEL
              PROYECTO, SIN IMPUESTOS.
            </li>
            <li>
              SERVICIO PERSONALIZADO, NO TE ESTARAN LLAMANDO DE 15 BANCOS
              DISTINTOS. ACOMPAÑOS HASTA EL MOMENTO DE LA FIRMA.
            </li>
            <li>
              SERVICIO TOTALMENTE GRATUITO PARA FINANCIACIONES POR DEBAJO DEL
              90% DE CV-80% DE TASACION O PARA CAMBIO DE HIPOTECA.
            </li>
          </ul>
        </div>
        <div
          class="
            flex
            items-start
            justify-around
            sm:justify-start
            w-full
            text-light-primary text-sm text-bold text-justify
            md:text-justify
            mb-2
          "
        >
          Las ventajas que ofrecen los bancos, al contar con un funcionario
          dentro de la hipoteca, son múltiples, pero sobre todo la posibilidad
          de que la tasación no sea un problema. En determinadas zonas de
          España, donde la vivienda tiene valores ya muy altos, la dificultad de
          conseguir la hipoteca depende mucho del resultado de la tasación, y el
          poder a porcentajes superiores al 80% de la tasación, facilita la
          concesión de este tipo de hipotecas.
        </div>
        <div
          class="
            flex
            items-start
            justify-around
            sm:justify-start
            w-full
            text-light-primary text-sm text-bold text-justify
            md:text-justify
            mb-2
          "
        >
          Existen además ofertas especiales para empleados públicos,
          consiguiendo mejores condiciones a nivel de tipo de interés que las
          mejores ofertas publicadas, pudiendo conseguir hipotecas a tipo fijo
          desde el 0.80% hasta el 1.4% dependiendo del porcentaje de
          financiación y de la capacidad de endeudamiento. Siendo las hipotecas
          a tipo variable, incluso algo mas baja. Y dependiendo también de los
          productos vinculados que finalmente se contraten con la hipoteca, que
          marcan en buena media a día de hoy el tipo de interés final.
        </div>
        <div
          class="
            flex
            items-start
            justify-around
            sm:justify-start
            w-full
            text-light-primary text-sm text-bold text-justify
            md:text-justify
            mb-2
          "
        >
          Hipoteca10, te ofrece la posibilidad de que te olvides de visitar
          bancos, de que te estén llamando 15 personas distintas ofreciéndote
          cada uno una cosa diferente, de que te preocupe la tasación, el de
          saber si llevas todo preparado a la firma, etc. Estamos para ayudarte
          con todo.
        </div>
        <div class="flex items-center justify-center w-full mt-8">
          <a
            class="
              w-5/6
              lg:w-3/6
              p-2
              text-base text-center
              rounded-lg
              sm:p-4
              md:p-4
              bg-light-accent
              border-light-accent
              text-light
              sm:text-xl
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
            ><span class="font-bold text-light-secondary">910758169</span>
          </a>
        </div>
      </div>
      <div class="flex items-start justify-center w-full lg:w-3/6 mt-4 sm:mt-6">
        <Formulario @openModal="openModal" />
      </div>
    </div>
    <div
      class="
        w-11/12
        my-6
        lg:justify-center
        flex flex-col
        lg:flex-row
        items-strech
        text-center
        lg:flex-wrap
      "
    >
      <div
        class="flex justify-center mb-3 cursor-pointer w-full lg:w-1/3"
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
            h-52
            hover:shadow-md
          "
        >
          <h3 class="text-lg font-black tracking-wide text-light-secondary">
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
            "
          >
            Para conseguir el 100% de la Compra Venta.
          </div>
        </div>
      </div>
      <div
        class="flex justify-center mb-3 cursor-pointer w-full lg:w-1/3"
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
            h-52
            hover:shadow-md
          "
        >
          <h3 class="text-lg font-black tracking-wide text-light-secondary">
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
            "
          >
            Para construir la casa de tus sueños.
          </div>
        </div>
      </div>
      <div
        class="flex justify-center mb-3 cursor-pointer w-full lg:w-1/3"
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
            h-52
            hover:shadow-md
          "
        >
          <h3 class="text-lg font-black tracking-wide text-light">
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
            "
          >
            Por si tu banco no te quiere lo suficiente.
          </div>
        </div>
      </div>
      <div
        class="flex justify-center mb-3 cursor-pointer w-full lg:w-1/3"
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
            h-52
            hover:shadow-md
          "
        >
          <h3 class="text-lg font-black tracking-wide text-light-secondary">
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
            "
          >
            Posibilidad de financiar el 100% de la compra más los gastos.
          </div>
        </div>
      </div>
      <div
        class="flex justify-center mb-3 cursor-pointer w-full lg:w-1/3"
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
            h-52
            hover:shadow-md
          "
        >
          <h3 class="text-lg font-black tracking-wide text-light-secondary">
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
            "
          >
            Posibilidad 100% de Tasación.
          </div>
        </div>
      </div>
      <div
        class="flex justify-center mb-3 cursor-pointer w-full lg:w-1/3"
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
            h-52
            hover:shadow-md
          "
        >
          <h3 class="text-lg font-black tracking-wide text-light">
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
            "
          >
            Sin coste de gestión.
          </div>
        </div>
      </div>
    </div>
    <div class="w-11/12 my-12 div-center">
      <div
        class="w-full h-1 bg-light-primary border-1 border-light-primary"
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
        class="w-full h-1 bg-light-primary border-1 border-light-primary"
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

  data() {
    return {
      productos: [
        {
          id: 1,
          ref: 'h100',
          title: 'Hipoteca 100% (*)',
          type: 'accent',
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
              text: 'Dependiendo del perfil, posibilidad de conseguir 100% de CV, 90% de Tasacion.',
            },
          ],
        },
        {
          id: 2,
          ref: 'h80',
          title: 'Hipoteca 80% (*)',
          type: 'primary',
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
          data: [
            {
              id: 1,
              text: 'Para conseguir las mejores condiciones con un servicio personalizado, y adaptándose a todas la necesidades de financiación que necesites.',
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
              text: 'Hipoteca por el importe del 100% de la Compra venta y los gastos asociados a la compra ( ITP o IVA, Notaria, registro, GESTORIA de la escritura de Compra).',
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
