# Road — E2: Boot sequence + typed hero

> AKRS execution contract (Mode 3). Second of 3 Plan E Roads. Worker follows it exactly;
> no redesign. Depends on E1 (terminal tokens, JetBrains Mono, `.term-prompt`, reduced-motion
> guard) already shipped. Spec: `docs/work-flow-ai/Execution-Contract.md`.

## Task objective
Add the one-time **"establishing secure session…" boot overlay** and a **typewriter reveal**
for the hero tagline — the signature "you entered a live AI session" moment. Nothing else.

## Required knowledge (read in order)
1. `akrs/memory/design-system.md`
2. `docs/requirements-and-design.md` §5 (Signature motifs, Motion budget)
3. `app/app.vue` (mount point: root div wrapping `<NuxtPage />`)
4. `app/pages/index.vue` (hero: name `profile.name`, role `profile.title`, tagline paragraph)
5. `app/assets/css/style.css` (existing animations + the E1 `prefers-reduced-motion` block)

## Design decisions (locked for this Road — within approved direction)
- **Boot overlay content:** a few terminal lines, fast (total ~1.6–2.2s), e.g.
  `> establishing secure session…` → `> loading profile: asad_eisa` → `> frontend && ai` →
  then fade out. Mono font, `--term-bg` background, `--term-accent`/`--term-prompt` colors.
- **Runs once per browser session** via `sessionStorage` (key e.g. `akrs_boot_seen`). A
  refresh in the same session does NOT replay it; a new session does.
- **Skippable:** any click / keypress / Esc dismisses it immediately.
- **Typed hero:** typewriter effect types the hero **tagline** (the descriptive paragraph)
  and optionally the role line, starting right after the boot overlay finishes.

## Expected files (change scope)
| File | Change |
|---|---|
| `app/components/BootSequence.vue` (**new**) | Full-screen client-only overlay. Renders the terminal boot lines with a typed/stagger effect, then fades out and unmounts. Sets `sessionStorage` flag + a shared `useState('bootDone', () => false)` to `true` when finished/skipped. Skippable via click/key/Esc. |
| `app/composables/useTypewriter.ts` (**new**) | Small reusable typewriter: given full text, returns a reactive displayed string + `start()`. Used by hero (and reused in E3). |
| `app/app.vue` | Mount `<BootSequence />` wrapped so it is **client-only** (e.g. `<ClientOnly>`), above the rest. Do not change `useHead`/SEO/footer. |
| `app/pages/index.vue` | Apply `useTypewriter` to the hero tagline (and optionally the role). Start typing when the shared `bootDone` flag is true. Keep the full text as the final state. |

## Execution boundaries — do NOT
- Add the agent/Leader→Worker/token HUD or typed **section** reveals — that is **E3**.
- Change any copy, project data, identity, or `app/content/*` values.
- Render the overlay in SSR HTML — it must be client-only so crawlers see real content and
  there is no SSR/hydration flash. Hero text must exist in SSR HTML for SEO (type on client;
  final state = the full real text).
- Cause layout shift (CLS): reserve the tagline's space so typing doesn't reflow the page.
- Re-trigger the boot on every route change / scroll.
- Touch the theme toggle, contact form, or `nuxt.config`.

## Known risks / for the Worker
- **SSR/SEO:** the hero tagline must be present in server-rendered HTML. Animate by starting
  from full text and replaying on client only — never ship an empty SSR tagline.
- **Reduced motion:** if `prefers-reduced-motion: reduce`, SKIP the boot animation (instant
  dismiss / no overlay) and show the hero tagline fully without typing.
- **Hydration:** reading `sessionStorage` must happen in `onMounted` (client), not during
  SSR/setup, to avoid hydration mismatch.
- Keep `--i` hero entrance animations working alongside the typewriter.

## Done when
- First visit in a session shows the boot overlay; refresh same session does not; skippable.
- Hero tagline types out after boot; ends on the full real text.
- `prefers-reduced-motion` → no boot animation, full tagline shown instantly.
- No SSR overlay, no CLS, hero text present in SSR HTML.
- `pnpm build` succeeds.
