// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath, URL } from "node:url";

import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  site: { url: 'https://asadeisa.github.io' },
  nitro: { prerender: { routes: ['/'], crawlLinks: true } },
  devtools: { enabled: true },
  css: ["~/assets/css/app.css"],
  modules: ["@vueuse/nuxt", "@nuxt/image", "@nuxt/fonts", "@nuxtjs/sitemap"],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./", import.meta.url)),
      },
    },
  },

 fonts: {
    families: [
      {
        name: "Work Sans",
        provider: "google",
         variable: true,
         display: "swap",
        weights: [200, 300, 400, 500, 600] // all weights
      },
      {
        name: "JetBrains Mono",
        provider: "google",
        display: "swap",
        weights: [400, 500, 700]
      }
    ]
  },
image: {
    format: ["webp"],
    provider: "twicpics",
    twicpics: {
      baseURL: ""
    }
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ],
      htmlAttrs: {
        lang: 'en',
      }
    }
  }
});
