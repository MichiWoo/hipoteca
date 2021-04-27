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
    'nuxt-validate',
    '@nuxtjs/toast',
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
    Disallow: '/',
    Allow: '/',
    Sitemap: 'https://www.hipoteca10.es/sitemap.xml',
  },
  sitemap: {
    hostname: 'https://hipoteca10.es',
    gzip: true,
  },
  googleAnalytics: {
    id: 'UA-98350560-1',
  },
  nuxtValidate: {
    lang: 'es',
  },
  toast: {
    position: 'bottom-right',
    register: [
      {
        name: 'my_error',
        message: 'Oops...Ha ocurrido un error al enviar el Email.',
        options: {
          type: 'error',
          duration: 3000,
        },
      },
      {
        name: 'my_success',
        message: 'El Email ha sido enviado exitosamente.',
        options: {
          type: 'success',
          duration: 3000,
        },
      },
    ],
  },
}
