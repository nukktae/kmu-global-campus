// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@vueuse/motion/nuxt',
  ],
  app: {
    head: {
      title: 'KMU Global Campus',
      titleTemplate: '%s - KMU Global Campus'
    }
  },
  motion: {
    directives: {
      'motion-fade': {
        initial: { opacity: 0 },
        enter: { opacity: 1 }
      },
      'motion-slide-bottom': {
        initial: { opacity: 0, y: 100 },
        enter: { opacity: 1, y: 0 }
      }
    }
  },
  build: {
    transpile: ['three']
  },
  router: {
    options: {
      strict: false
    }
  }
})
