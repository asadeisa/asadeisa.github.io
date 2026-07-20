// Skills as grouped tag chips (no percentage bars).
// Source of truth: docs/source-of-truth.md §4.

import type { SkillGroup } from '~/types/global'

export const skillGroups: SkillGroup[] = [
  {
    name: 'Frameworks',
    items: ['Vue.js 3/2', 'Nuxt 3', 'React', 'Composition API', 'Pinia', 'Vuex', 'Vue Router', 'Redux (familiar)'],
  },
  {
    name: 'Languages',
    items: ['TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3'],
  },
  {
    name: 'UI & Styling',
    items: ['Tailwind CSS', 'Bootstrap', 'SCSS', 'Nuxt UI', 'CSS Grid', 'Flexbox', 'Mobile-first responsive'],
  },
  {
    name: 'State',
    items: ['Pinia', 'Vuex', 'Context API (familiar)', 'Redux (familiar)'],
  },
  {
    name: 'Performance',
    items: ['SSR', 'SSG', 'Lazy loading', 'Code splitting', 'Bundle optimization', 'Lighthouse', 'Core Web Vitals'],
  },
  {
    name: 'Quality',
    items: ['Cross-browser', 'Web security (HTTPS, input validation, XSS)', 'OWASP fundamentals'],
  },
  {
    name: 'Tooling',
    items: ['Git', 'Vite', 'Webpack', 'Postman', 'Playwright', 'Lighthouse', 'Figma', 'Adobe XD'],
  },
  {
    name: 'CI/CD & Deploy',
    items: ['Netlify', 'Vercel', 'GitHub Actions (basic)', 'Sitemap automation', 'Build pipelines'],
  },
  {
    name: 'AI Workflow',
    items: ['Claude Code', 'OpenAI Codex', 'Prompt engineering', 'Agentic task decomposition', 'Context files', 'Reusable skills', 'Multi-agent delegation (wmux)'],
  },
]
