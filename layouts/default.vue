<template>
  <div>
    <ModalTerminos v-show="showModal" @closeModal="closeModal" />
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
    }
  },
  mounted() {
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
      window['ga-disable-UA-98350560-1'] = false
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
      }
    },
  },
}
</script>

<style></style>
