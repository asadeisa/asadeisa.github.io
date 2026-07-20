// Professional experience — single owner. Source of truth: docs/source-of-truth.md §5 (CV).
// Factual only. CityArt was a performance-only contribution, NOT site authorship.
// Delivaz appears here for its metric; it is not linked (backend closed).

import type { ExperienceRole } from '~/types/global'

export const experience: ExperienceRole[] = [
  {
    role: 'Front-End Developer',
    org: 'CityArt (Remote)',
    period: 'Jan 2026 – Present',
    highlights: [
      'Page-speed optimization across an existing Laravel/Blade site (cityart.my).',
      'Performance contribution only — did not build the site.',
    ],
  },
  {
    role: 'Frontend Developer',
    org: 'Albaz Globe (Iraq, Remote)',
    period: 'Jul 2025 – Dec 2025',
    highlights: [
      'Complex admin dashboards and REST-driven views for AI-driven workflows.',
      'Pinia state management; Figma → Vue 3 implementation.',
    ],
  },
  {
    role: 'Frontend Developer (Contract)',
    org: 'Parking & Creative Platforms (Remote)',
    period: 'Jan 2025 – Jun 2025',
    highlights: [
      'Rebuilt Park & Fetch in Nuxt 3 — achieved a 100 SEO score.',
      'Bundle optimization and code-splitting; Hadiawada artist portfolio.',
    ],
  },
  {
    role: 'Lead Frontend Developer',
    org: 'Delivaz Multi-Vendor E-commerce (Remote)',
    period: 'Dec 2023 – Dec 2024',
    highlights: [
      'Built from scratch in Nuxt 3 / Vue; improved Lighthouse from 70 to 95.',
      'Accessibility and release quality. (Backend/API closed — not shown publicly.)',
    ],
  },
]
