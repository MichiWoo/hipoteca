<template>
  <div class="flex flex-col items-center justify-center mt-8">
    <div class="flex justify-center w-9/12 my-4 sm:w-4/6 lg:w-2/6">
      <h5
        class="text-base sm:text-xl text-light-secondary dark:text-dark-secondary"
      >
        Formulario de Contacto
      </h5>
    </div>
    <div class="flex justify-center w-9/12 my-4 sm:w-4/6 lg:w-2/6">
      <p
        class="text-sm text-center sm:text-base text-light-primary dark:text-dark-primary"
      >
        Hipoteca 10 es tu solución, Contacta con Nosotros para conseguir tu
        hipoteca 100%(*).
      </p>
    </div>
    <div class="flex justify-center w-9/12 my-4 sm:w-4/6 lg:w-2/6">
      <Input
        placeholder="Nombre Completo"
        type-input="text"
        aria-label="Campo de texto para el nombre Completo"
        @changeText="changeName"
      />
    </div>
    <div class="flex justify-center w-9/12 my-4 sm:w-4/6 lg:w-2/6">
      <Input
        placeholder="Teléfono"
        type-input="text"
        aria-label="Campo de texto para el teléfono"
        @changeText="changePhone"
      />
    </div>
    <div class="flex justify-center w-9/12 my-4 sm:w-4/6 lg:w-2/6">
      <Input
        placeholder="Localidad"
        type-input="text"
        aria-label="Campo de texto para la localidad"
        @changeText="changeCity"
      />
    </div>
    <div class="flex justify-center w-9/12 my-4 sm:w-4/6 lg:w-2/6">
      <Input
        placeholder="Email"
        type-input="text"
        aria-label="Campo de texto para el email"
        @changeText="changeEmail"
      />
    </div>
    <div class="flex justify-center w-9/12 my-4 sm:w-4/6 lg:w-2/6">
      <TextArea
        placeholder="Cuentános tu caso"
        aria-label="Campo de texto para los comentarios"
        @changeText="changeComment"
      />
    </div>
    <div
      class="flex items-start justify-start w-9/12 mt-2 mb-2 sm:w-4/6 lg:w-2/6"
    >
      <div
        class="flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 border-2 rounded bg-light dark:bg-dark text-light-primary dark:text-dark-primary border-light-primary dark:border-dark-primary focus-within:border-light-accent dark-focus-within:border-dark-accent"
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
        class="text-sm text-justify select-one text-light-primary dark:text-dark-primary"
      >
        He
        <a class="font-bold cursor-pointer" @click="openModal"
          >leído y acepto</a
        >
        la información sobre protección de datos facilitada en la Web.
      </div>
    </div>
    <div class="flex justify-center w-9/12 mt-2 mb-2 sm:w-4/6 lg:-2/6">
      <ButtonSubmit
        text="Enviar"
        aria-label="Botón para enviar el formulario"
      ></ButtonSubmit>
    </div>
    <div class="flex justify-center w-9/12 sm:w-4/6 lg:-2/6">
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
    <div class="flex justify-center mt-2 mb-2">
      <div class="flex justify-center w-9/12 sm:w-4/6 lg:-2/6">
        <h6
          class="text-sm text-justify text-light-secondary dark:text-dark-accent"
        >
          HIPOTECAES10 SL, ESTA DADA DE ALTA EN EL REGISTRO DEL BANCO DE ESPAÑA,
          SEGÚN LA LEY 05/2019, COMO INTERMEDIARIO DE CREDITO INMOBILIARIO CON
          NUMERO DE REGISTRO D061.
        </h6>
      </div>
    </div>
    <div class="flex justify-center mt-2 mb-2">
      <div class="flex justify-center w-9/12 sm:w-1/6">
        <div class="relative w-full bg-light-secondary pb-2/12">
          <img
            class="absolute object-cover w-full h-full"
            src="/aecosan.jpg"
            alt="Logo Aecosan"
          />
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
  },
}
</script>

<style scoped>
input:checked + svg {
  display: block;
}
</style>
