# Road — E3: Agent HUD + typed section reveals

> AKRS execution contract (Mode 3). Final of 3 Plan E Roads. Worker follows it exactly;
> no redesign. Depends on E1 (terminal tokens, JetBrains Mono, `.term-prompt`, `Ui/Prompt`,
> reduced-motion guard) and E2 (`useTypewriter`, `bootDone` state) — both shipped.
> Spec: `docs/work-flow-ai/Execution-Contract.md`.

## Task objective
Add the **decorative "Leader → Worker" agent HUD** and **typed-on-scroll reveals for the `>`
prompt headers** — the final "terminal doing AI work" layer. Reuse `useTypewriter`. Nothing else.

## Required knowledge (read in order)
1. `akrs/memory/design-system.md`
2. `docs/requirements-and-design.md` §2 (honesty rule), §5 (Signature motifs, Motion budget)
3. `app/composables/useTypewriter.ts` (E2 — reuse, do not modify)
4. `app/composables/useNamedIntersectionObserver.ts` + `@vueuse/core` `useIntersectionObserver`
5. `app/components/Ui/Prompt.vue` (the header component to extend)
6. `app/assets/css/app.css` (`--term-accent`, `--term-prompt`, `--term-bg` tokens)
7. `app/assets/css/style.css` (`.term-prompt`, `.term-caret`, reduced-motion block)
8. `app/app.vue` (mount context, already has `<ClientOnly><BootSequence /></ClientOnly>`)

## Design decisions (locked for this Road — within approved direction)
- **HUD content:** a small chip reading `◇ leader → worker ▸ ok` (mono). **Purely decorative** —
  may cycle a subtle state/pulse, but MUST NOT claim to be a live agent or show real telemetry.
  No token/context numbers (that option was declined). Honesty rule (§2) applies.
- **HUD placement:** fixed **bottom-left**, **desktop only** (`hidden md:flex`) — never collide
  with the top-right `ThemeToggle`, never clutter mobile. Colors from terminal tokens, `--term-bg`
  backing with subtle border.
- **Typed reveals:** **prompt headers only** — `> who_am_i`, `> skills`, `> experience`,
  `> selected_work`, `> more_work`. Each types itself ONCE when it scrolls into view. Intro
  paragraphs keep their existing `fade-in`. Opt-in via a `typed` prop on `Ui/Prompt`.

## Expected files (change scope)
| File | Change |
|---|---|
| `app/components/AgentHud.vue` (**new**) | Fixed bottom-left decorative chip: `leader → worker` with a subtly cycling `▸ ok` / pulse. Mono, `--term-accent`/`--term-prompt` on `--term-bg`, subtle border. `hidden md:flex`. `aria-hidden="true"` (decorative). Static (no animation) under `prefers-reduced-motion`. |
| `app/components/Ui/Prompt.vue` | Add opt-in `typed?: boolean` prop. When `true`: feed `text` through `useTypewriter` (inits to full text → SSR-safe, no CLS), self-observe the root via `useIntersectionObserver`, call `start()` ONCE on first intersect. Keep the existing caret + `> ` accent. Non-typed usages render exactly as today. |
| `app/app.vue` | Mount `<AgentHud />` inside `<ClientOnly>`, alongside `<BootSequence />`. Do not touch `useHead`/footer/`NuxtPage`. |
| `app/pages/index.vue` | Add `typed` to the `> who_am_i` and `> experience` `UiPrompt` headers. One-prop edits; keep all classes/`--i`. |
| `app/components/Skills.vue` | Add `typed` to the `> skills` `UiPrompt`. |
| `app/components/Projects.vue` | Add `typed` to `> selected_work` (slot) + `> more_work` `UiPrompt`. |
| `app/components/Experience.vue` | Add `typed` to its `UiPrompt` header if present. |

## Execution boundaries — do NOT
- Claim the HUD is real/live; no real-looking token/context telemetry. Decorative + `aria-hidden`.
- Type intro paragraphs, body text, or the hero (hero was E2). Headers only.
- Modify `useTypewriter.ts`, `BootSequence.vue`, the hero, content data (`app/content/*`),
  theme toggle, contact form, or `nuxt.config`.
- Cause layout shift (headers reserve their space; init displayed = full text).
- Ship empty header text in SSR HTML — headers must be present server-side for SEO.
- Re-type a header every time it re-enters the viewport — type once.

## Known risks / for the Worker
- **SSR/SEO:** `useTypewriter` already inits `displayed` to full text → header is in SSR HTML.
  Observe + `start()` only on client (`onMounted`), guard `import.meta.client`.
- **Reduced motion:** `useTypewriter` already no-ops typing under reduce; ALSO make the HUD
  static (no pulse/cycle) under `prefers-reduced-motion`.
- **Observe once:** the existing `useNamedIntersectionObserver` already guards with
  `if (visible.value) return`; for Prompt use a local "hasStarted" guard so `start()` fires once.
- Keep `.term-caret` + `--i` entrance animations working alongside the typewriter.

## Done when
- Decorative `leader → worker` HUD shows bottom-left on desktop, hidden on mobile, static under
  reduced-motion, `aria-hidden`.
- Each `>` header types out once when scrolled into view; full text in SSR HTML; no layout shift.
- `prefers-reduced-motion` → headers shown instantly, HUD static.
- `pnpm build` succeeds.
