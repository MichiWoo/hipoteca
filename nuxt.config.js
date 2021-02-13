export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'hipoteca',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  axios: {},
  build: {},
  tailwindcss: {
    exposeConfig: true,
  },
  purgeCSS: {
    whitelist: ['dark-mode'],
  },
  telemetry: false,
}
