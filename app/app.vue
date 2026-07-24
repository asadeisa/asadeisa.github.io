<script setup lang="ts">
useHead({
  title: 'Asad Eisa – Frontend Developer (Nuxt.js & Vue.js)',
  meta: [
    {
      name: 'description',
      content: 'Frontend Developer specializing in Nuxt.js, Vue.js, and performance optimization. Portfolio of projects in SEO, UI/UX, and scalable web apps.'
    },
    {
      name: 'keywords',
      content: 'Asad Eisa, frontend developer, Nuxt.js, Vue.js, web developer, portfolio, UI/UX, SEO, JavaScript, TypeScript, web performance, SSR, responsive design, Tartus, Syria, download CV, modern web, scalable apps ,asad eisa , اسد عيسى , مطور واجة امامية , مطور ويب , نكست جي اس , فيو جي اس , مطور نكست , مطور فيو , مطور فرونت اند'
    },
    { property: 'og:title', content: 'Asad Eisa – Frontend Developer' },
    { property: 'og:description', content: 'Portfolio showcasing Nuxt.js, Vue.js, and SEO projects.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://asad-eisa.netlify.app/' },
    { property: 'og:image', content: 'https://asad-eisa.netlify.app/assets/images/profile/1.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Asad Eisa – Frontend Developer' },
    { name: 'twitter:description', content: 'Portfolio showcasing Nuxt.js, Vue.js, and SEO projects.' },
    { name: 'twitter:image', content: 'https://asad-eisa.netlify.app/assets/images/profile/1.png' },
  ],
  link: [
    {
      rel: 'alternate',
      type: 'application/pdf',
      href: '/assets/files/asad-eisa.pdf',
      title: 'asad eisa CV PDF'
    },
    { rel: 'canonical', href: 'https://asad-eisa.netlify.app/' },
    { rel: 'preconnect', href: 'https://asad-eisa.netlify.app', crossorigin: '' }
  ]
})
</script>
<template>
  <div>
    <ClientOnly>
      <BootSequence />
      <CommandHint />
      <CommandPalette />
    </ClientOnly>
    <NuxtPage />
    <NuxtRouteAnnouncer />
    <footer class="text-center -translate-y-10 text-xs md:text-sm lg:text-base">
     
      <p class="opacity-55 mt-1">© 2026 Asad Eisa. All rights reserved.</p>
    </footer>
  </div>
</template>
