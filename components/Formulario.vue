<template>
  <div
    ref="formulario"
    class="flex flex-col items-center justify-center w-full sm:w-4/6"
  >
    <div class="flex justify-center w-full my-4">
      <h5
        class="
          text-base
          sm:text-xl
          text-light-secondary text-justify
          dark:text-dark-secondary
        "
      >
        Hipoteca 10 es tu solución, Contacta con Nosotros para conseguir tu
        hipoteca.
      </h5>
    </div>
    <div class="flex justify-center w-full my-4 sm:w-4/6 lg:w-full">
      <Input
        placeholder="Nombre Completo"
        type-input="text"
        aria-label="Campo de texto para el nombre Completo"
        @changeText="changeName"
      />
    </div>
    <div class="flex justify-center w-full my-4 sm:w-4/6 lg:w-full">
      <Input
        placeholder="Teléfono"
        type-input="text"
        aria-label="Campo de texto para el teléfono"
        @changeText="changePhone"
      />
    </div>
    <div class="flex justify-center w-full my-4 sm:w-4/6 lg:w-full">
      <Input
        placeholder="Localidad"
        type-input="text"
        aria-label="Campo de texto para la localidad"
        @changeText="changeCity"
      />
    </div>
    <div class="flex justify-center w-full my-4 sm:w-4/6 lg:w-full">
      <Input
        placeholder="Email"
        type-input="text"
        aria-label="Campo de texto para el email"
        @changeText="changeEmail"
      />
    </div>
    <div class="flex justify-center w-full my-4 sm:w-4/6 lg:w-full">
      <TextArea
        placeholder="Cuentános tu caso"
        aria-label="Campo de texto para los comentarios"
        @changeText="changeComment"
      />
    </div>
    <div
      class="flex items-start justify-start w-full mt-2 mb-2 sm:w-4/6 lg:w-full"
    >
      <div
        class="
          flex
          items-center
          justify-center
          flex-shrink-0
          w-6
          h-6
          mr-2
          border-2
          rounded
          bg-light
          dark:bg-dark
          text-light-primary
          dark:text-dark-primary
          border-light-primary
          dark:border-dark-primary
          focus-within:border-light-accent
          dark-focus-within:border-dark-accent
        "
      >
        <input
          v-model="acepta"
          class="absolute opacity-0"
          type="checkbox"
          aria-label="checkbox para aceptar los términos y condiciones"
        /><svg
          class="hidden w-4 h-4 pointer-events-none fill-accent"
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path>
        </svg>
      </div>
      <div
        class="
          text-sm text-justify
          select-one
          text-light-primary
          dark:text-dark-primary
        "
      >
        He
        <a class="font-bold cursor-pointer" @click="openModal"
          >leído y acepto</a
        >
        la información sobre protección de datos facilitada en la Web.
      </div>
    </div>
    <div class="flex justify-center w-full mt-2 mb-2 sm:w-4/6 lg:w-full">
      <ButtonSubmit
        text="Enviar"
        aria-label="Botón para enviar el formulario"
        @clicked="checkForm"
      ></ButtonSubmit>
    </div>
    <div class="flex justify-center w-full sm:w-4/6 lg:w-full">
      <h6
        class="text-sm text-justify text-light-primary dark:text-dark-primary"
      >
        Tratamos la información que nos facilita con el fin de prestarles el
        servicio solicitado. Los datos proporcionados se conservarán hasta que
        el interesado no solicite la supresión de sus datos. Los datos no se
        cederán a terceros excepto una obligación legal. Usted tiene derecho a
        acceder a sus datos personales, rectificar los datos inexactos o
        solicitar su supresión cuando los datos ya no sean necesarios.
      </h6>
    </div>
    <div class="flex justify-center w-full mt-2 mb-2 sm:w-4/6 lg:w-full">
      <div class="flex justify-center">
        <h6
          class="
            text-sm text-justify text-light-secondary
            dark:text-dark-accent
          "
        >
          <a
            href="https://www.bde.es/bde/es/secciones/servicios/Particulares_y_e/registro-de-intermediarios/registro-de-intermediarios-de-credito-inmobiliario-y-prestamistas-inmobiliarios.html"
            target="_blank"
            rel="noreferer noopener"
          >
            HIPOTECAES10 SL, ESTA DADA DE ALTA EN EL REGISTRO DEL BANCO DE
            ESPAÑA, SEGÚN LA LEY 05/2019, COMO INTERMEDIARIO DE CREDITO
            INMOBILIARIO CON NUMERO DE REGISTRO D061.
          </a>
        </h6>
      </div>
    </div>
    <div class="flex justify-center w-full mt-2 mb-2 sm:w-4/6 lg:w-full">
      <div class="flex justify-center">
        <h6
          class="
            text-sm text-justify text-light-secondary
            dark:text-dark-accent
          "
        >
          <a href="/mail/i_p.pdf" target="_blank" rel="noreferer noopener">
            Documento de información pre contractural.
          </a>
        </h6>
      </div>
    </div>
    <div class="flex justify-center w-full mt-2 mb-2 lg:w-full">
      <div class="flex justify-center w-full">
        <div class="relative w-full bg-light-secondary pb-2/12">
          <a href="/aecosan.html" target="_blank" rel="noreferer noopener">
            <nuxt-img
              sizes="sm:200px md:400px lg:800px"
              class="absolute object-cover w-full h-full"
              src="/aecosan.jpg"
              alt="Logo Aecosan"
              loading="lazy"
              quality="75"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Formulario',
  components: {
    Input: () => import('../components/Input'),
    TextArea: () => import('../components/TextArea'),
    ButtonSubmit: () => import('../components/ButtonSubmit'),
  },
  props: {
    aceptaTerm: {
      type: Boolean,
      default: false,
    },
    goToForm: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      nombre: '',
      telefono: '',
      localidad: '',
      email: '',
      comentario: '',
      acepta: false,
      showModal: false,
    }
  },
  watch: {
    aceptaTerm() {
      this.acepta = this.aceptaTerm
    },
    goToForm() {
      if (this.goToForm) {
        this.scroll('formulario')
      }
    },
  },
  methods: {
    changeName(val) {
      this.nombre = val
    },
    changePhone(val) {
      this.telefono = val
    },
    changeCity(val) {
      this.localidad = val
    },
    changeEmail(val) {
      this.email = val
    },
    changeComment(val) {
      this.comentario = val
    },
    openModal() {
      this.$emit('openModal', true)
    },
    scroll(where) {
      this.$refs[where].scrollIntoView({ behavior: 'smooth' })
      this.$store.commit('goToForm', false)
    },
    checkForm() {
      if (
        this.nombre &&
        this.telefono &&
        this.localidad &&
        this.email &&
        this.comentario &&
        this.acepta
      ) {
        this.submitForm()
      } else {
        this.submitError()
      }
    },

    submitError() {
      if (!this.acepta) {
        this.$emit('erroInForm', 'a')
      }
    },

    submitForm() {
      const myFormObj = {
        nombre: this.nombre,
        telefono: this.telefono,
        localidad: this.localidad,
        email: this.email,
        comentario: this.comentario,
        acepta: this.acepta,
      }
      this.$emit('submitForm', myFormObj)
    },
  },
}
</script>

<style scoped>
input:checked + svg {
  display: block;
}
</style>
