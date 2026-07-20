// Projects — single owner. Source of truth: docs/source-of-truth.md §6.
// Featured order is intentional: old → new (frontend → AI), telling the brand arc.
//
// IMPORTANT (verified 2026-06-27 via GitHub CLI):
//  - Only public, recent repos may be linked (gitUrl). Never link old/private repos.
//  - SpeakType = shipped AI product (kind 'ai-product').
//  - AKRS = experimental workflow concept; MUST keep the experimental label, never
//    present as finished. It is the same workflow spec in docs/work-flow-ai/.
//
// NOTE: `image` paths reuse existing slots (1..6.png) as PLACEHOLDERS. The old images
// belonged to the dropped demo cards — replace with real screenshots during the build.

import type { Work } from '~/types/global'

export const featuredProjects: Work[] = [
  {
    id: 1,
    title: 'Hadiawada',
    description:
      'Artist portfolio built Figma-to-code: accessibility-focused, fully responsive, with a YouTube media gallery.',
    tools: ['Vue 3', 'Vite', 'Tailwind CSS'],
    url: 'https://hadiawada.com',
    summary: 'Accessibility-first artist portfolio, Figma to code, fully responsive.',
    kind: 'frontend',
  },
  {
    id: 2,
    title: 'Wefaq Magazine',
    description:
      'Research publishing platform: submission workflows, reviewer arbitration, content archive, admin, bilingual AR/EN.',
    tools: ['React', 'Supabase'],
    url: 'https://wefaqmagazine.com',
    summary: 'Research publishing platform: submission & review workflows, AR/EN.',
    kind: 'frontend',
  },
  {
    id: 3,
    title: 'Balsa Files',
    description:
      'E-commerce flows: cart, wishlist, checkout, payment status, and responsive end-to-end user journeys.',
    tools: ['Vue', 'Nuxt'],
    url: 'https://balsa.tayasmart.com',
    summary: 'E-commerce flows: cart, wishlist, checkout, payment status.',
    kind: 'frontend',
  },
  {
    id: 4,
    title: 'SpeakType',
    description:
      'Open-source AI product: a voice-to-text platform and browser extension that drops accurate, context-aware text into any editable field (Gmail, Slack, Notion, ChatGPT). Groq Whisper transcription + Gemini cleanup, privacy-first. Built using a multi-agent dev workflow coordinated through the wmux terminal.',
    tools: ['WXT', 'Vue 3', 'TypeScript', 'Nuxt 4 + Nitro', 'Neon Postgres + Drizzle', 'Groq Whisper', 'Google Gemini', 'BetterAuth'],
    gitUrl: 'https://github.com/asadeisa/SpeakType',
    summary: 'Open-source voice-to-text platform + browser extension.',
    kind: 'ai-product',
  },
  {
    id: 5,
    title: 'AKRS',
    description:
      'Adaptive Knowledge Routing System — an experimental workflow concept for routing AI agents through the minimum required knowledge (Leader plans / Worker executes). A new direction for structuring AI work, currently a markdown specification.',
    tools: ['Markdown spec', 'Workflow architecture'],
    gitUrl: 'https://github.com/asadeisa/akrs',
    summary: 'Experimental knowledge-routing workflow for AI agents.',
    kind: 'experimental',
    label: 'Experimental · V0 · ongoing',
  },
]

// Secondary "more work". Park & Fetch surfaces a strong, verifiable metric.
export const secondaryProjects: Work[] = [
  {
    id: 6,
    title: 'Park & Fetch',
    description: 'Parking platform rebuilt in Nuxt 3 with a strong SEO posture and optimized bundle/code-splitting.',
    tools: ['Nuxt 3'],
    url: 'https://parkandfetch.com',
    summary: 'Parking platform rebuilt in Nuxt 3 with a 100 SEO score.',
    kind: 'frontend',
    metric: '100 SEO score',
  },
]
