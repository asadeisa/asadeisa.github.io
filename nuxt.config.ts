export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  site: { url: 'https://asadeisa.github.io' },
  nitro: { prerender: { routes: ['/'], crawlLinks: true } },
  devtools: { enabled: false },
  css: ['~/assets/css/portfolio.css'],
  modules: ['@nuxtjs/sitemap'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      script: [{
        key: 'portfolio-theme',
        innerHTML: "try{if(localStorage.getItem('theme')==='light')document.documentElement.dataset.theme='light'}catch{}",
      }],
    },
  },
})