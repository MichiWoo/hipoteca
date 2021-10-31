<template>
  <div>
    <ModalTerminos v-show="showModal" @closeModal="closeModal" />
    <ModalInfo
      v-show="showModalInfo"
      :config="configModalInfo"
      @closeModal="closeModalInfo"
    />
    <div
      ref="formulario"
      class="flex flex-col items-center justify-center w-full"
    >
      <div class="flex justify-center w-full my-1 sm:w-4/6">
        <h5
          class="
            text-sm text-light-secondary text-justify
            dark:text-dark-secondary
          "
        >
          Hipoteca 10 es tu solución, Contacta con Nosotros para conseguir tu
          hipoteca.
        </h5>
      </div>
      <div class="flex justify-center w-full my-1 sm:w-4/6">
        <Input
          placeholder="Nombre Completo"
          type-input="text"
          aria-label="Campo de texto para el nombre Completo"
          @changeText="changeName"
        />
      </div>
      <div class="flex justify-center w-full my-1 sm:w-4/6">
        <Input
          placeholder="Teléfono"
          type-input="text"
          aria-label="Campo de texto para el teléfono"
          @changeText="changePhone"
        />
      </div>
      <div class="flex justify-center w-full my-1 sm:w-4/6">
        <Input
          placeholder="Localidad"
          type-input="text"
          aria-label="Campo de texto para la localidad"
          @changeText="changeCity"
        />
      </div>
      <div class="flex justify-center w-full my-1 sm:w-4/6">
        <Input
          placeholder="Email"
          type-input="text"
          aria-label="Campo de texto para el email"
          @changeText="changeEmail"
        />
      </div>
      <div class="flex justify-center w-full my-1 sm:w-4/6">
        <TextArea
          placeholder="Cuentános tu caso"
          aria-label="Campo de texto para los comentarios"
          rows="1"
          @changeText="changeComment"
        />
      </div>
      <div class="flex items-start justify-start w-full mt-2 mb-2 sm:w-4/6">
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
            text-xs
            sm:text-sm
            text-justify
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
      <div class="flex justify-center w-full mt-1 mb-2 sm:w-4/6">
        <ButtonSubmit
          text="Enviar"
          aria-label="Botón para enviar el formulario"
          @clicked="checkForm"
        ></ButtonSubmit>
      </div>
      <div class="flex justify-center w-full sm:w-4/6">
        <h6
          class="
            text-xs
            sm:text-sm
            text-justify text-light-primary
            dark:text-dark-primary
          "
          :class="ocultarTexto ? 'excerpt' : ''"
        >
          Tratamos la información que nos facilita con el fin de prestarles el
          servicio solicitado. Los datos proporcionados se conservarán hasta que
          el interesado no solicite la supresión de sus datos. Los datos no se
          cederán a terceros excepto una obligación legal. Usted tiene derecho a
          acceder a sus datos personales, rectificar los datos inexactos o
          solicitar su supresión cuando los datos ya no sean necesarios.
        </h6>
      </div>
      <div class="flex justify-center w-full mt-2 mb-2 sm:w-4/6">
        <div class="flex justify-center">
          <h6
            class="
              text-xs
              sm:text-sm
              text-justify text-light-secondary
              dark:text-dark-accent
            "
          >
            <a
              href="https://www.bde.es/bde/es/secciones/servicios/Particulares_y_e/registro-de-intermediarios/registro-de-intermediarios-de-credito-inmobiliario-y-prestamistas-inmobiliarios.html"
              target="_blank"
              rel="noreferer noopener"
              :class="ocultarTexto ? 'excerpt' : ''"
            >
              HIPOTECAES10 SL, ESTA DADA DE ALTA EN EL REGISTRO DEL BANCO DE
              ESPAÑA, SEGÚN LA LEY 05/2019, COMO INTERMEDIARIO DE CREDITO
              INMOBILIARIO CON NUMERO DE REGISTRO D061.
            </a>
          </h6>
        </div>
      </div>
      <div class="flex justify-center w-full mt-2 mb-2 sm:w-4/6">
        <div class="flex justify-center">
          <h6
            class="
              text-xs
              sm:text-sm
              text-justify text-light-secondary
              dark:text-dark-accent
            "
          >
            <a href="/mail/i_p.pdf" target="_blank" rel="noreferer noopener">
              Documento de información pre contractural.
            </a>
          </h6>
        </div>
      </div>
      <div class="flex justify-center w-full mt-2 mb-2 sm:w-3/6">
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
  </div>
</template>

<script>
export default {
  name: 'Formulario',
  components: {
    Input: () => import('../components/Input'),
    TextArea: () => import('../components/TextArea'),
    ButtonSubmit: () => import('../components/ButtonSubmit'),
    ModalTerminos: () => import('./ModalTerminos.vue'),
    ModalInfo: () => import('./ModalInfo.vue'),
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
      configModalInfo: {},
      showModalInfo: false,
      aceptaTerm: false,
      ocultarTexto: true,
    }
  },
  computed: {
    getIdSession() {
      return this.$store.state.idSession
    },
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
      this.ocultarTexto = val === ''
    },
    openModal(val) {
      this.showModal = val
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
        this.displayModal(
          'Error',
          'Debe aceptar los términos y condiciones primero.',
          'OK',
          'e'
        )
      }
    },
    closeModal(val) {
      this.showModal = false
      if (val === 'ok') {
        this.aceptaTerm = true
      } else {
        this.aceptaTerm = false
      }
    },
    closeModalInfo() {
      this.showModalInfo = false
      this.configModalInfo = {}
    },
    displayModal(title, text, textOk, type) {
      this.configModalInfo = {
        title,
        text,
        textOk,
        type,
      }
      this.showModalInfo = true
    },
    async submitForm(form) {
      const formData = new FormData()
      formData.append('nombre', this.nombre)
      formData.append('email', this.email)
      formData.append('mensaje', this.comentario)
      formData.append('telefono', this.telefono)
      formData.append('localidad', this.localidad)
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/form-data' },
        data: formData,
        url: '/mail/enviarMail2.php',
      }
      await this.$axios(options)
        .then((res) => {
          if (res.data.success) {
            this.displayModal(
              'Enviado',
              'El email se envio correctamente.',
              'OK',
              's'
            )
            this.$ga.event('form', 'click', 'adsense', 1)
            this.$gtm.push({ event: 'click' })
            this.saveDataForm(form)
          } else {
            this.displayModal(
              'Error',
              'Ops, el email no se ha se envio correctamente.',
              'OK',
              'e'
            )
          }
        })
        .catch((err) => {
          this.displayModal('Error', `Error: ${err.message}`, 'OK', 'e')
        })
    },
    async saveDataForm() {
      const formData = new FormData()
      formData.append('id', this.getIdSession)
      formData.append('nombre', this.nombre)
      formData.append('mail', this.email)
      formData.append('mensaje', this.comentario)
      formData.append('telefono', this.telefono)
      formData.append('movil', 0)
      formData.append('localidad', this.localidad)

      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/form-data' },
        data: formData,
        url: '/gestor/addForm.php',
      }

      await this.$axios(options)
        .then((res) => res.data)
        .catch((err) => {
          this.displayModal('Error', `Error: ${err.message}`, 'OK', 'e')
        })
    },
  },
}
</script>

<style scoped>
input:checked + svg {
  display: block;
}
.excerpt {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
