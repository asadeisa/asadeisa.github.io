# Copilot Instructions for AI Agents

## Project Overview
- This is a Nuxt 3 minimal starter project using TypeScript, with the main app code in the `app/` directory and static assets in `public/`.
- The entry point is `app/app.vue`. Pages are in `app/pages/` (e.g., `index.vue`).
- Global styles are in `app/assets/css/app.css`.
- Configuration is managed via `nuxt.config.ts` and `tsconfig.json`.

## Key Workflows
- **Install dependencies:**
  - `pnpm install` (preferred), or `npm install`, `yarn install`, `bun install`
- **Start development server:**
  - `pnpm dev` (or `npm run dev`, `yarn dev`, `bun run dev`)
- **Build for production:**
  - `pnpm build` (or `npm run build`, `yarn build`, `bun run build`)
- **Preview production build locally:**
  - `pnpm preview` (or `npm run preview`, `yarn preview`, `bun run preview`)

## Project Conventions
- Use Nuxt 3 conventions for file structure: pages in `app/pages/`, layouts in `app/layouts/` (if present), composables in `app/composables/`.
- TypeScript is enabled by default; prefer `.ts` and `.vue` files.
- Use the Nuxt auto-import system for composables and components.
- Static files (e.g., `favicon.ico`, `robots.txt`) go in `public/`.
- avoid use type "any" in TypeScript files; prefer explicit types or `unknown` if necessary.
- consider when generating components , pages to handel sm screen and lg screen with proper tailwind css classes, don't forget to fit the font and padding and margin in all screen.

## Integration & Dependencies
- Managed with `pnpm` (see `pnpm-lock.yaml`).
- Nuxt modules and plugins are configured in `nuxt.config.ts`.
- No custom build or test scripts beyond Nuxt defaults.
- Tailwind css is with v 4 keep it in mind while generating code and solve problems.
## Examples
- To add a new page, create a `.vue` file in `app/pages/` (e.g., `about.vue` for `/about`).
- To add global CSS, edit `app/assets/css/app.css` and import it in `nuxt.config.ts` if not already.
- fallow the Instruction that i put or write in the comment , read the comment and relay on it while generating code or solving problems.
- Implement the image using NuxtImg.
- Conceder the component that I create In case you have to ues it like buttons. 


## References
- See [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) for framework details.
- For deployment, see [Nuxt deployment docs](https://nuxt.com/docs/getting-started/deployment).

- See for styling and configuration of Tailwind CSS, refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs/installation) and ensure it is properly integrated (with v-4) with Nuxt 3 as shown in the `nuxt.config.ts` and `app/assets/css/app.css` files.
---

If you are unsure about a workflow or convention, prefer the Nuxt 3 standard approach unless a project-specific pattern is clearly established in the codebase.