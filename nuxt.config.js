export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'romaisweb',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content:
        'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui'
       },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/application.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/fontawesome',
  ],
  
  fontawesome: {
    icons: {
      regular: ['faComment', 'faThumbsUp'],
      brands: ['faMedium'],
      solid: [
        'faArrowLeft',
        'faBolt',
        'faCalendar',
        'faChartLine',
        'faChevronDown',
        'faChevronUp',
        'faCircle',
        'faClock',
        'faCog',
        'faComment',
        'faComments',
        'faEdit',
        'faEraser',
        'faFilter',
        'faHistory',
        'faImage',
        'faInfoCircle',
        'faLink',
        'faNewspaper',
        'faPencilRuler',
        'faPlus',
        'faQuoteLeft',
        'faQuoteRight',
        'faSearch',
        'faSignOutAlt',
        'faThLarge',
        'faThumbsUp',
        'faTimes',
        'faTrash',
        'faTrophy',
        'faUpload',
        'faUser',
        'faUserEdit',
        'faUsers',
      ]
    },
  }
}
