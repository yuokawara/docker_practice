export default {
  /*
  ** Headers of the page
  */

  // mode: 'spa',
  ssr: false,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  // target: 'server',
  head: {
    title: 'my-practice',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

/*
+ ** modules
+ */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true,
    baseURL: 'http:///172.18.0.2:3002',
    headers: {
      common: {
        'X-Requested-With': 'XMLHttpRequest, Origin',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',

        // 'allow_origins': 'origins',
        // 'allow_methods': ["*"],
        // 'allow_headers': ["*"],
      },
    },
    credentials: true,
  },
  proxy: {
    '/api': {
      target: 'https://connect.squareupsandbox.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api' : '/api/'
        }
      }
  },
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' },
    // { src: '~/plugins/localStorage.js', ssr: false }
  ],
  /*
  ** Build configuration
  */
  build: {
    extend(config, ctx) {
      config.node = {
        fs: 'empty'
      };
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  }
}

