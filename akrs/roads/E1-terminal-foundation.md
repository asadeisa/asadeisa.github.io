# Road — E1: Terminal design foundation

> AKRS execution contract (Mode 3). First of 3 staged Plan E Roads. Worker follows it
> exactly; no redesign. Spec: `docs/work-flow-ai/Execution-Contract.md`.
> Plan E stages (only E1 is generated now): **E1 foundation → E2 boot+hero typed → E3 HUD+reveals.**

## Task objective
Establish the dark-first **terminal aesthetic** as a reusable foundation, and apply it to the
section headers — without boot overlay, typed reveals, or HUD (those are E2/E3). Make the site
*read* like a terminal while staying fast, accessible, and light/dark correct.

## Required knowledge (read in order)
1. `akrs/memory/design-system.md`
2. `docs/requirements-and-design.md` §2, §5
3. `app/assets/css/app.css` (token system, `@theme`, `.dark` variant)
4. `app/assets/css/style.css` (existing animations / fonts)

## Design decisions (locked for this Road — within the approved direction)
- **Mono font:** add **JetBrains Mono** via `@nuxt/fonts` (already a dep). Use for prompt
  headers, code/HUD flavor, terminal chrome. Body text stays **Work Sans**.
- **Terminal accent:** introduce tokens — `--term-accent` (green `#4ade80`), `--term-prompt`
  (cyan `#22d3ee`), `--term-bg` (deep `#0a0f1a` dark / subtle tint light). Keep ALL existing
  tokens; this is an additive terminal layer, not a replacement.
- **Prompt header look:** `> text` with mono font, accent-colored `>`, optional blinking
  caret (CSS only, respects reduced-motion).

## Expected files (change scope)
| File | Change |
|---|---|
| `nuxt.config.ts` | Ensure `@nuxt/fonts` loads JetBrains Mono (families config). Nothing else. |
| `app/assets/css/app.css` | Add the 3 terminal tokens to `:root` + `:root.dark` and matching `@theme` color vars (`--color-term-accent`, etc.). |
| `app/assets/css/style.css` | Add `.term-prompt` (mono, accent `>`, blinking caret keyframe) + a `@media (prefers-reduced-motion: reduce)` block that disables `.child-home`, `.fade-in`, `.left/right-section`, and the caret. Remove now-dead `.skill-progress` rules (progress bars are gone). |
| `app/components/Ui/Prompt.vue` (**new**) | Tiny presentational component: renders a section heading as `> <text>` using `.term-prompt`; prop `text`, optional `as` (h2/h3). Keeps existing heading sizing classes via a passthrough class/slot. |
| `app/pages/index.vue` | Swap the raw `> who_am_i` / `> experience` text headers to use `Ui/Prompt` (keep existing layout/size classes + `--i` animation). |
| `app/components/Skills.vue` | Header `> skills` → `Ui/Prompt`. |
| `app/components/Projects.vue` | `> selected_work` (slot from index) + `> more_work` → `Ui/Prompt`. |
| `app/components/Experience.vue` | Section header (if any) → `Ui/Prompt`. |

## Execution boundaries — do NOT
- Add the boot/"secure session" overlay or typed-text reveals (E2).
- Add the agent/Leader→Worker/token HUD (E3).
- Change any content, copy, project data, or `app/content/*`.
- Touch the contact form logic, theme-toggle logic, or routing.
- Break light mode — every terminal token must have a sane light value.
- Restructure sections or change the IA (that was the A/C Road).

## Known risks / for the Worker
- Tailwind 4 reads tokens from `@theme`; add new color tokens there so `text-term-accent`
  utilities exist. Verify the build picks them up.
- `@nuxt/fonts` auto-detects font-family usage; confirm JetBrains Mono actually loads
  (used by `.term-prompt`).
- Keep the `.dark` background-image gradient intact.

## Done when
- JetBrains Mono loads; `.term-prompt` renders `> text` with accent `>` + caret.
- Every section header uses `Ui/Prompt`; no raw `>` strings left in templates.
- Terminal tokens exist in both `:root` and `.dark`; light + dark both look correct.
- `prefers-reduced-motion` disables the animations + caret.
- `pnpm build` succeeds.
