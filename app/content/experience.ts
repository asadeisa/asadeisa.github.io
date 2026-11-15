import type { ExperienceRole } from '~/types/global'

export const experience: ExperienceRole[] = [
  {
    role: 'Full-Stack Developer',
    org: 'CityArt',
    period: 'Jan 2026 – Jul 2026',
    highlights: [
      'Delivered assigned agency projects across academic publishing and e-commerce, including editorial workflows, admin views, and responsive checkout.',
      'Improved page speed on CityArt’s existing Laravel site.',
    ],
  },
  {
    role: 'Lead Frontend Developer',
    org: 'Albaz Globe',
    period: 'Jul 2025 – Dec 2025',
    highlights: [
      'Worked on the web dashboard for Ako Sayara, an automotive marketplace serving Iraq. Set up routing, state management, API integration, and shared components in Vue and Nuxt.',
      'Built REST-driven views and translated Figma designs into reusable components.',
    ],
    links: [
      { label: 'Albaz Globe website', url: 'https://albazglobe.com/' },
      { label: 'Ako Sayara on Google Play', url: 'https://play.google.com/store/apps/details?id=com.ako_sayara' },
    ],
  },
  {
    role: 'Frontend Developer (Contract)',
    org: 'Parking & Creative Platforms',
    period: 'Jan 2025 – Jun 2025',
    highlights: [
      'Migrated Park & Fetch to Nuxt 3 and reached a Lighthouse SEO score of 100 in a project audit.',
      'Built the Hadiawada artist portfolio with Vue 3 and Vite.',
    ],
  },
  {
    role: 'Lead Frontend Developer',
    org: 'Delivaz',
    period: 'Dec 2023 – Dec 2024',
    highlights: [
      'Led the Nuxt frontend for a multi-vendor e-commerce platform covering catalog, vendor, and checkout flows.',
      'Raised the Lighthouse performance score from 70 to 95 in project testing through lazy loading and code splitting.',
    ],
  },
]
