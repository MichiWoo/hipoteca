export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'Hipoteca 10',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Hipoteca10 está especializada en conseguir para sus clientes financiaciones para compra de vivienda, por encima del 80%.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/LogoH10.ico' }],
  },
  css: [],
  plugins: ['~/plugins/vue-cookies.js'],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-analytics',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-adsense',
  ],
  axios: {
    baseURL: '',
  },
  build: {
    extend(config, { isClient }) {
      const isProd = process.env.NODE_ENV === 'production'
      if (isProd && isClient) {
        config.optimization.splitChunks.maxSize = 249856 // 244 Kib
      }
    },
    analyze: true,
  },
  tailwindcss: {
    exposeConfig: true,
  },
  purgeCSS: {
    whitelist: ['dark-mode'],
  },
  telemetry: false,
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://www.hipoteca10.es/sitemap.xml',
  },
  sitemap: {
    hostname: 'https://hipoteca10.es',
  },
  googleAnalytics: {
    id: 'UA-98350560-1',
  },
  'google-adsense': {
    id: 'ca-pub-169-973-7450',
  },
}
