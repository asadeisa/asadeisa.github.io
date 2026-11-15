<script setup lang="ts">
import { profile } from '~/content/profile'

const title = `${profile.name} | ${profile.title}`
const description = 'Asad Eisa builds web and Android products with Nuxt, Vue, Flutter, and AI-assisted development. Explore selected projects and download his CV.'
const canonical = `${profile.site}/`
const shareImage = `${profile.site}/assets/images/social/asad-eisa-share.jpg`
const shareImageAlt = `${profile.name} — ${profile.title}, with a portrait and code icon`

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: canonical,
  ogImage: shareImage,
  ogImageType: 'image/jpeg',
  ogImageWidth: 600,
  ogImageHeight: 600,
  ogImageAlt: shareImageAlt,
  twitterCard: 'summary',
  twitterImage: shareImage,
  twitterImageAlt: shareImageAlt,
})
useHead({
  link: [
    { rel: 'canonical', href: canonical },
    { rel: 'alternate', type: 'application/pdf', href: profile.cvPath, title: 'Asad Eisa CV' },
  ],
})
</script>

<template>
  <NuxtPage />
</template>