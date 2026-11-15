import type { Work } from '~/types/global'

export const shopProject: Work = {
  id: 7,
  title: 'Shop Management App',
  description: 'An offline-first Android app for small shops to record sales, track inventory and customer balances, and see how the business is doing.',
  tools: ['Flutter', 'Dart', 'SQLite / Drift', 'Nuxt', 'PostgreSQL'],
  url: 'https://store-dash.netlify.app/',
  urlLabel: 'Visit product site',
  kind: 'mobile',
}

export const shopCheckout = {
  description: 'Checkout saves the invoice and reduces stock in one local SQLite transaction using Drift. The changes commit together, so a failed sale cannot leave the stock count out of step with the invoice.',
  screens: [
    {
      src: '/assets/images/shop-management-checkout.webp',
      alt: 'New sale screen with items, quantities, and the amount due',
      caption: 'Build a sale',
    },
    {
      src: '/assets/images/shop-management-inventory.webp',
      alt: 'Product list with stock quantities and a low-stock warning',
      caption: 'Track stock',
    },
  ],
} as const

export const featuredProjects: Work[] = [
  shopProject,
  {
    id: 5,
    title: 'AKRS v2',
    description: 'An open-source CLI that gives coding agents the project context they need for each task. It manages handoffs between planners, implementers, and testers and records verification results.',
    tools: ['Node.js', 'CLI', 'MCP', 'Context engineering'],
    url: 'https://www.npmjs.com/package/akrs-framework',
    urlLabel: 'View on npm',
    gitUrl: 'https://github.com/asadeisa/akrs',
    kind: 'developer-tools',
    label: 'Open-source developer tool',
  },
  {
    id: 2,
    title: 'Wefaq Magazine',
    description: 'Arabic and English academic publishing workflows, from manuscript submission and peer review to editorial administration.',
    tools: ['React', 'Supabase', 'Tailwind CSS'],
    url: 'https://wefaqmagazine.com',
    kind: 'frontend',
  },
  {
    id: 3,
    title: 'Basalama Oud',
    description: 'Implemented responsive cart, wishlist, checkout, and payment status flows for an online oud store.',
    tools: ['Laravel', 'Bootstrap'],
    url: 'https://balsa.tayasmart.com',
    kind: 'frontend',
  },
  {
    id: 6,
    title: 'Park & Fetch',
    description: 'Migrated a parking platform to Nuxt, reviewed client bundles, and automated sitemap generation.',
    tools: ['Nuxt 3'],
    url: 'https://parkandfetch.com',
    kind: 'frontend',
    metric: '100 Lighthouse SEO in a project audit',
  },
  {
    id: 1,
    title: 'Hadiawada',
    description: 'Built a responsive artist portfolio from Figma with a video gallery and accessible navigation.',
    tools: ['Vue', 'Vite', 'Tailwind CSS'],
    url: 'https://hadiawada.com',
    kind: 'frontend',
  },
  {
    id: 4,
    title: 'SpeakType',
    description: 'An open-source browser extension designed to turn speech into editable text directly in web apps.',
    tools: ['WXT', 'Vue', 'TypeScript', 'Nuxt / Nitro', 'PostgreSQL'],
    gitUrl: 'https://github.com/asadeisa/SpeakType',
    kind: 'experimental',
    label: 'In development',
  },
]
