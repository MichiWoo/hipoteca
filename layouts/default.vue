<template>
  <div>
    <ModalTerminos v-show="showModal" @closeModal="closeModal" />
    <ModalInfo
      v-show="showModalInfo"
      :config="configModalInfo"
      @closeModal="closeModalInfo"
    />
    <ModalCookies
      v-show="showCookiesConf"
      :data-cookies="dataCookies"
      @closeModalCookies="closeModalCookies"
    />
    <ModalCookiesAll
      v-show="showCookiesAll"
      @closeModalCookiesAll="closeModalCookiesAll"
    />
    <Menu v-show="showMenuDialog" @closeMenu="closeMenu" />
    <Header @showMenu="showMenu" />
    <Nuxt />
    <Formulario
      :acepta-term="aceptaTerm"
      :go-to-form="goToForm"
      @openModal="openModal"
      @submitForm="submitForm"
      @erroInForm="erroInForm"
    />
    <Footer />
    <CookiesContainer @verCookies="showCookiesConf = true" />
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('../components/Header'),
    Footer: () => import('../components/Footer'),
    Menu: () => import('../components/Menu'),
    Formulario: () => import('../components/Formulario'),
    ModalTerminos: () => import('../components/ModalTerminos'),
    CookiesContainer: () => import('../components/CookiesContainer'),
    ModalCookies: () => import('../components/ModalCookies'),
    ModalCookiesAll: () => import('../components/ModalCookiesAll'),
    ModalInfo: () => import('../components/ModalInfo'),
  },
  data() {
    return {
      showMenuDialog: false,
      showModal: false,
      aceptaTerm: false,
      showCookiesConf: false,
      showCookiesAll: false,
      dataCookies: {},
      goToForm: false,
      ip: '',
      isMobile: false,
      idSesion: '',
      configModalInfo: {},
      showModalInfo: false,
    }
  },
  mounted() {
    this.desactivarCookieAnalitics()
    const existeCookieInicio = this.$cookies.isKey('verCookie')
    const existeCookiePreferencias = this.$cookies.isKey('preferencesCookies')
    if (existeCookieInicio) {
      if (existeCookiePreferencias) {
        this.showCookiesConf = false
        const cookiePrefences = this.$cookies.get('preferencesCookies')
        this.dataCookies = {
          marketing: cookiePrefences.marketing === 'si',
          analitics: cookiePrefences.analiticas === 'si',
        }
      } else {
        this.showCookiesConf = true
      }
    } else {
      this.$cookies.set('verCookie', 'si', '2m')
      this.showCookiesAll = true
    }
    this.$store.watch(
      Object.getOwnPropertyDescriptor(this.$store.state, 'inForm').get,
      (data) => {
        this.goToForm = data
      }
    )
    const isMobile = {
      Android: () => {
        navigator.userAgent.match(/Android/i)
      },
      BlackBerry: () => {
        return navigator.userAgent.match(/BlackBerry/i)
      },
      iOS: () => {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
      },
      Opera: () => {
        return navigator.userAgent.match(/Opera Mini/i)
      },
      Windows: () => {
        return navigator.userAgent.match(/IEMobile/i)
      },
      any: () => {
        return (
          isMobile.Android() ||
          isMobile.BlackBerry() ||
          isMobile.iOS() ||
          isMobile.Opera() ||
          isMobile.Windows()
        )
      },
    }

    if (isMobile.any()) {
      this.isMobile = 1
    } else {
      this.isMobile = 0
    }
    let text = ''
    const possible =
      'AbcDE123IJKLMN67QRSTUVWXYZaBCdefghijklmn123opq45rs67tuv89wxyz0FGH45OP89'

    for (let i = 0; i < 4; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    const hoy = new Date()
    let dd = hoy.getDate()
    let mm = hoy.getMonth() + 1
    const yyyy = hoy.getFullYear()
    const yyyystr = yyyy.toString()
    const yy = yyyystr.substr(2, 3)

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }
    this.idSesion = yy + mm + dd + text
    window.dataLayer = window.dataLayer || []
    function gtag() {
      // eslint-disable-next-line no-undef
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', 'AW-854025985')
    this.getIp()
  },
  methods: {
    showMenu(val) {
      this.showMenuDialog = val
    },
    closeMenu(val) {
      this.showMenuDialog = val
    },
    openModal(val) {
      this.showModal = val
    },
    closeModal(val) {
      this.showModal = false
      if (val === 'ok') {
        this.aceptaTerm = true
      } else {
        this.aceptaTerm = false
      }
    },
    closeModalCookies(val) {
      this.showCookiesConf = false
      this.guardarCookiesPreferencias(val.marketing, val.analitics)
    },
    closeModalCookiesAll(val) {
      this.showCookiesAll = false
      switch (val) {
        case 'ok':
          this.aceptarCookies()
          break
        case 'no':
          this.rechazarCookies()
          break
        case 'aj':
          this.showCookiesConf()
          break
        case 'c':
          return false
      }
    },
    activarCookieAnalitics() {
      this.$ga.page(this.$router)
      this.$ga.enable()
    },
    desactivarCookieAnalitics() {
      this.$ga.disable()
    },
    aceptarCookies() {
      const expiration = new Date()
      expiration.setTime(expiration.getTime() + 60000 * 60 * 24 * 60)
      const myObj = {
        necesarias: 'si',
        marketing: 'si',
        analitics: 'si',
      }
      this.dataCookies = {
        marketing: true,
        analitics: true,
      }
      const myText = JSON.stringify(myObj)
      this.$cookies.set('preferencesCookies', myText, expiration, '2m')
    },
    rechazarCookies() {
      const expiration = new Date()
      expiration.setTime(expiration.getTime() + 60000 * 60 * 24 * 60)
      const myObj = {
        necesarias: 'si',
        marketing: 'no',
        analitics: 'no',
      }
      this.dataCookies = {
        marketing: false,
        analitics: false,
      }
      const myText = JSON.stringify(myObj)
      this.$cookies.set('preferencesCookies', myText, expiration, '2m')
    },
    guardarCookiesPreferencias(marketing, analitics) {
      const expiration = new Date()
      expiration.setTime(expiration.getTime() + 60000 * 60 * 24 * 60)
      const myObj = {
        necesarias: 'si',
        marketing: marketing ? 'si' : 'no',
        analitics: analitics ? 'si' : 'no',
      }
      this.dataCookies = {
        marketing,
        analitics,
      }
      const myText = JSON.stringify(myObj)
      this.$cookies.set('preferencesCookies', myText, expiration, '2m')
      if (marketing) {
        this.activarCookieAnalitics()
      } else {
        this.desactivarCookieAnalitics()
      }
    },
    async submitForm(form) {
      const formData = new FormData()
      formData.append('nombre', form.nombre)
      formData.append('email', form.email)
      formData.append('mensaje', form.comentario)
      formData.append('telefono', form.telefono)
      formData.append('localidad', form.localidad)
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
    async getIp() {
      const URL_API = 'https://api.ipify.org/?format=json'
      const respuestaRaw = await this.$axios.$get(URL_API)
      this.ip = respuestaRaw.ip
      if (this.ip.length > 0) {
        this.saveIp()
      }
    },
    async saveIp() {
      const formData = new FormData()
      formData.append('id', this.idSesion)
      formData.append('ip', this.ip)
      formData.append('pagina', window.location.href)
      formData.append('movil', this.isMobile)
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/form-data' },
        data: formData,
        url: '/gestor/addIp.php',
      }
      await this.$axios(options)
        .then((res) => res.data)
        .catch((err) => {
          this.displayModal('Error', `Error: ${err.message}`, 'OK', 'e')
        })
    },
    async saveDataForm(form) {
      const formData = new FormData()
      formData.append('id', this.idSesion)
      formData.append('nombre', form.nombre)
      formData.append('mail', form.email)
      formData.append('mensaje', form.comentario)
      formData.append('telefono', form.telefono)
      formData.append('movil', this.isMobile)
      formData.append('ip', this.ip)
      formData.append('localidad', form.localidad)

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
    displayModal(title, text, textOk, type) {
      this.configModalInfo = {
        title,
        text,
        textOk,
        type,
      }
      this.showModalInfo = true
    },
    closeModalInfo() {
      this.showModalInfo = false
      this.configModalInfo = {}
    },
    erroInForm(e) {
      if (e === 'a') {
        this.displayModal(
          'Error',
          'Debe aceptar los términos y condiciones primero.',
          'OK',
          'e'
        )
      }
    },
  },
}
</script>
