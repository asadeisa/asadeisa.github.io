# Road — F: Quality gate (hardening)

> AKRS execution contract (Mode 3). Phase P4 (Hardening). Worker follows exactly; no redesign.
> Depends on Plans C + E (shipped). Spec: `docs/work-flow-ai/Execution-Contract.md`.
> Applies safe code-level fixes; Lighthouse/keyboard/contrast remain a MANUAL checklist for the developer.

## Task objective
Ship the rebuild **fast, accessible, discoverable, responsive**: apply low-risk code fixes for the
audited gaps, lock **SSG** for Netlify, add **sitemap + robots**. No content/data/image changes,
no redesign.

## Required knowledge (read in order)
1. `docs/requirements-and-design.md` §4 (Non-functional), §5 (Motion budget)
2. `akrs/memory/design-system.md`
3. `nuxt.config.ts` (modules, fonts, image, app.head)
4. `app/app.vue` (`useHead` — current meta/OG/link)
5. `app/assets/css/style.css` (animations + `prefers-reduced-motion` block; NO focus styles exist)

## Locked decisions (developer-approved)
- **Rendering:** SSG via `nuxt generate` (static `.output/public` → Netlify static).
- **Sitemap:** `@nuxtjs/sitemap` module + a `public/robots.txt`.
- **Scope:** apply safe code fixes now; hand perf/keyboard/contrast to the developer as a checklist.

## Audit findings (grounding the fixes)
- No `:focus` / `:focus-visible` styles anywhere in CSS → keyboard a11y gap.
- No `og:image`, no Twitter card, no robots meta in `useHead` → social/SEO gap.
- `generate` script already exists (`nuxt generate`); SSG is config + verification, not a rewrite.

## Expected files (change scope)
| File | Change |
|---|---|
| `nuxt.config.ts` | Add `@nuxtjs/sitemap` to `modules`; add `site: { url: 'https://asad-eisa.netlify.app' }`; add `nitro: { prerender: { routes: ['/'], crawlLinks: true } }` so `nuxt generate` fully prerenders. Keep ALL existing config (fonts, image, css, alias, app.head). |
| `app/app.vue` (`useHead`) | Add `og:image` (use an existing public asset, e.g. the profile image), `og:type` (website), `og:url` (canonical), and `twitter:card` (summary_large_image) + `twitter:title`/`twitter:description`/`twitter:image`. Keep every current tag unchanged. |
| `app/assets/css/style.css` | Add a global `:focus-visible` focus ring — visible in BOTH themes, using a terminal/accent token (e.g. `outline: 2px solid var(--term-prompt); outline-offset: 2px;`). Do not remove the existing reduced-motion block. |
| `public/robots.txt` (**new**) | `User-agent: *` / `Allow: /` + `Sitemap: https://asad-eisa.netlify.app/sitemap.xml`. |
| a11y touch-ups (ONLY confirmed gaps) | Verify `NuxtImg`/`<img>` have `alt`; icon-only controls have `aria-label`; landmark roles present. Fix only real gaps with minimal edits. |

## Execution boundaries — do NOT
- Change project/skills/identity **content**, copy, or images (the placeholder-image swap is a separate, deferred task).
- Touch boot/hero/HUD motion (E2/E3) beyond adding the focus ring.
- Restructure sections/IA, theme-toggle logic, or the contact form.
- Remove or reorder existing `useHead` tags or existing `nuxt.config` options.
- Introduce real-looking telemetry or new dependencies beyond `@nuxtjs/sitemap`.

## Known risks / for the Worker
- **SSG prerender:** `nuxt generate` crawls from `/`; confirm `sitemap.xml` and `robots.txt` land in `.output/public`. If the sitemap module needs `site.url`, ensure it is set.
- **Focus ring + reduced motion:** the ring is a static outline (no animation) — safe under reduced motion. Ensure it is not suppressed by any global `outline: none`.
- **OG image:** point `og:image` at an asset that actually exists in `public/` or via the image pipeline; an absolute URL is preferred for crawlers.
- Keep `htmlAttrs.lang = 'en'` and the existing favicon link intact.

## Done when
- `pnpm generate` succeeds, emits static `.output/public` including `sitemap.xml`; `robots.txt` is served.
- Keyboard focus is visibly indicated in both light and dark themes.
- OG + Twitter meta present (link-preview ready); existing meta intact.
- Manual checklist delivered to the developer: Lighthouse (perf/a11y/SEO/best-practices),
  full keyboard tab-walk, AA contrast spot-check, dark/light parity, mobile responsive.
