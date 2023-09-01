export default {
    legacy: false,
    //locale: 'fr',
    differentDomains: true,
    detectBrowserLanguage: false,
    //defaultLocale: 'fr',
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
        domain: 'http://mydomain.uk:3000'
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        domain: 'http://mydomain.fr:3000'
      }
    ],
    // pages: {
    //   index: false
    // }
  }