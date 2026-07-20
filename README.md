# Asad Eisa — Developer Portfolio

A personal portfolio built with **Nuxt 4** and **Vue 3** — a terminal-inspired, single-page site that presents my work as a guided developer session rather than a static card menu. Frontend craft with an AI-assisted workflow angle.

🔗 **Live:** https://asadeisa.github.io

[![Nuxt](https://img.shields.io/badge/Nuxt-4-00DC82?logo=nuxt.js&logoColor=white)](https://nuxt.com)
[![Vue](https://img.shields.io/badge/Vue-3-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

---

## Features

- **Terminal-inspired UI** — dark-first command-line aesthetic with monospace section prompts (`> who_am_i`, `> selected_work`).
- **Signature motion** — a one-time, skippable boot sequence, typewriter hero, and typed-on-scroll section headers (all honoring `prefers-reduced-motion`).
- **Light / dark theme** toggle.
- **Content-driven** — all identity, projects, skills, and experience live in typed modules under `app/content/`, so the page renders from a single source of data.
- **Performance & SEO conscious** — SSR-safe content, no layout shift, automated sitemap.
- **Accessible** — AA contrast in both themes, reduced-motion support, semantic markup.

## Tech Stack

| Area | Tools |
|---|---|
| Framework | Nuxt 4, Vue 3 (Composition API) |
| Language | TypeScript |
| Styling | Tailwind CSS 4, SCSS |
| Utilities | VueUse |
| Tooling | Vite, ESLint, Prettier |
| Modules | `@nuxt/image`, `@nuxt/fonts`, `@nuxtjs/sitemap` |

## Project Structure

```
app/
├── components/      # UI components (BootSequence, AgentHud, Skills, Projects, …)
├── composables/     # Reusable logic (useTypewriter, intersection observer, …)
├── content/         # Single source of data: profile, social, skills, projects, experience
├── pages/           # Single-page route
├── types/           # Shared TypeScript types
└── assets/css/      # Global styles & design tokens
```

## Getting Started

Requirements: **Node.js 18+** and **pnpm** (npm/yarn/bun also work).

```bash
# Install dependencies
pnpm install

# Start the dev server at http://localhost:3000
pnpm dev
```

### Build

```bash
# Production build
pnpm build

# Preview the production build locally
pnpm preview

# Static site generation
pnpm generate
```

## Customizing the Content

This portfolio is data-driven. To adapt it, edit the typed modules in `app/content/`:

| File | Owns |
|---|---|
| `profile.ts` | Name, title, tagline, location, contact, languages, CV |
| `social.ts` | Public links (GitHub, …) |
| `skills.ts` | Grouped skill chips |
| `projects.ts` | Featured & secondary project set |
| `experience.ts` | Experience timeline |

## Contact

**Asad Eisa** — Frontend Developer · AI-assisted
📍 Tartous, Syria

- ✉️ [asad.eisa.dev@gmail.com](mailto:asad.eisa.dev@gmail.com)
- 🐙 [github.com/asadeisa](https://github.com/asadeisa)

## License

Copyright © Asad Eisa.
Released under the [MIT License](./LICENSE).

> The source code is MIT-licensed. Personal content — résumé text, project write-ups, and images — remains the property of the author; please don't reuse it as your own portfolio.
