export default {
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "spa",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
  ** Global CSS
  */
  css: ["@/assets/custom.scss"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: ["@nuxtjs/eslint-module"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth",
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extractCSS: true,
    friendlyErrors: false,
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        })
      }
    },
  }, // Heroku needs spa false
  axios: {
    baseURL: process.env.API_AUTH_URL
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'auth/local', method: 'post', propertyName: 'jwt' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: 'users/me', method: 'get', propertyName: false }
        },
        // tokenRequired: true,
        tokenType: 'bearer',
        // globalToken: true,
        // autoFetchUser: true
      }
    }
  },
  server: {
    port: process.env.PORT || 3000, // Heroku needs free port
  },
  ssr: false
}
