import type { SkillGroup } from '~/types/global'

export const skillGroups: SkillGroup[] = [
  { name: 'Web', items: ['TypeScript', 'Vue 3', 'Nuxt', 'React', 'Tailwind CSS', 'Pinia'] },
  { name: 'Mobile', items: ['Flutter', 'Dart', 'Android', 'Offline-first workflows'] },
  { name: 'Backend & data', items: ['REST APIs', 'Nitro', 'Laravel', 'PostgreSQL', 'Supabase', 'SQLite / Drift'] },
  { name: 'Performance & quality', items: ['SSR / SSG', 'Technical SEO', 'Lighthouse', 'Playwright', 'Accessibility', 'Arabic / English UI'] },
  { name: 'AI-assisted development', items: ['OpenAI Codex', 'Claude Code', 'Context engineering', 'Agent task planning', 'Code review and testing'] },
]