// Identity & contact — single owner (AKRS ownership rule).
// Source of truth: docs/source-of-truth.md §2. Phone is intentionally omitted (hidden).

export const profile = {
  name: 'Asad Eisa',
  title: 'Frontend Developer',
  // The "Frontend && AI" brand angle.
  tagline: 'Frontend Developer · AI-assisted — Vue 3 / Nuxt / TypeScript, and rethinking how AI agents work.',
  location: 'Tartous, Syria',
  email: 'asad.eisa.dev@gmail.com',
  availability: 'Available for hire',
  yearsExperience: '5+',
  languages: [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Upper-Intermediate (B2)' },
  ],
  education: 'Engineering Degree in Information Technology — Tartous University (2017–2022)',
  cvPath: '/assets/files/asad-eisa.pdf',
} as const
