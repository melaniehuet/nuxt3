// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: [
    '@nuxt/devtools',
    [
      '@nuxtjs/i18n',
      {
        legacy: false,
        //lazy: false,
        //locale: 'fr',
        differentDomains: true,
        detectBrowserLanguage: false,
        //defaultLocale: 'fr',
        // customRoutes: 'config',   // disable custom route with page components
        // pages: {
        //   index: {
        //     en: '', // -> accessible at /about-us (no prefix since it's the default locale)
        //     fr: '',
        //   }
        // },
        messages: {
          en: {
            welcome: 'Welcome'
          },
          fr: {
            welcome: 'Bienvenue'
          }
        },
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            domain: 'mydomain.uk:3000'
          },
          {
            code: 'fr',
            iso: 'fr-FR',
            domain: 'mydomain.fr:3000'
          }
        ]
      },
    ]
  ]
})
