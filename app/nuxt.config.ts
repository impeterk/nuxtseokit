// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // routeRules: {
  //   "/dashboard/**": { ssr: false }
  // },
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/fonts",
    "@vueuse/nuxt",
    "@nuxt/test-utils/module",
    "@nuxt/eslint",
    "@nuxt/image"
  ],
  fonts: {
    families: [
      { name: 'geist-sans', provider: 'fontshare' },
      { name: 'geist-mono', provider: 'fontshare' },
    ]
  },
  colorMode: {
    preference: 'light'
  },
})
