<template>
  <div>
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
    CookiesContainer: () => import('../components/CookiesContainer'),
    ModalCookies: () => import('../components/ModalCookies'),
    ModalCookiesAll: () => import('../components/ModalCookiesAll'),
  },
  data() {
    return {
      showMenuDialog: false,
      showModal: false,
      showCookiesConf: false,
      showCookiesAll: false,
      dataCookies: {},
      goToForm: false,
      isMobile: false,
      idSesion: '',
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
    this.saveIp()
  },
  methods: {
    showMenu(val) {
      this.showMenuDialog = val
    },
    closeMenu(val) {
      this.showMenuDialog = val
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
          this.showCookiesConf = true
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
    async saveIp() {
      const createConexion = await fetch(
        'http://localhost:8000/api/conexiones',
        {
          method: 'POST',
          headers: {},
        }
      )
      await createConexion.json()
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
  },
}
</script>
