# Road — A/C: Content rewire + section IA

> AKRS execution contract (Mode 3). One Task. The Worker follows this Road and does not
> redesign it. Spec: `docs/work-flow-ai/Execution-Contract.md`.

## Task objective
Rewire the existing single page and its components to render from `app/content/*`, remove
phone + LinkedIn, set experience to **5+**, convert skills to grouped chips, render the new
project set with `kind`-aware treatment, and restructure sections to the terminal IA
(prompt-style headers). **Structure + data only** — no boot animation / typed reveals
(those are Plan E).

## Required knowledge (read in this order)
1. `akrs/memory/identity.md`
2. `akrs/memory/content-layer.md`
3. `akrs/memory/projects.md`
4. `docs/requirements-and-design.md` §3.1, §3.2, §3.3
5. Data owners: `app/content/{profile,social,skills,projects,experience}.ts`
6. Types: `app/types/global.ts`

## Expected files (change scope)

| File | Change |
|---|---|
| `app/composables/useInfo.ts` | Re-export from `profile.ts` (keep `email`) OR mark deprecated; no second source of truth. |
| `app/pages/index.vue` | Bind name/title/tagline/availability from `profile`. **Delete** phone blocks (lines ~82–85, ~143–146) and **LinkedIn** link (~100). Change "3 +" → `profile.yearsExperience`. About text → 5+ years wording. Section ids/headers → prompt style (`> who_am_i`, `> skills`, `> selected_work`, `> experience`, `> more_work`, `> contact`). Add `experience` + `more_work` sections. |
| `app/components/Skills.vue` | Replace `Skill[]` + progress bars with grouped chips from `skillGroups`. Header → `> skills`. Remove percentage logic. |
| `app/components/Projects.vue` | Replace inline `works[]` with `featuredProjects`; add a secondary `more_work` list from `secondaryProjects`. Pass `kind` through. |
| `app/components/Ui/WorkCard.vue` | Make **Live button conditional** on `work.url` (SpeakType/AKRS have none). Render `label` badge (experimental) and `metric` when present. `kind`-aware accent. `gitUrl` link already handled. |
| `app/components/Experience.vue` (**new**) | Render `experience[]` as a compact timeline. |

## Execution boundaries (do NOT touch)
- No boot sequence, typed reveals, agent HUD, or Ctrl+K (Plan E / deferred).
- Do not change `ContactForm.vue` / `ContactUs.vue` logic (keep working form).
- Do not edit `nuxt.config.ts`, theme system, or `app/assets/css/*` beyond what a header
  restyle strictly needs.
- Do not add real project screenshots — placeholders stay (separate task).
- Do not touch any other `app/content/*` facts (they are confirmed).

## Known risks / decisions for the Worker
- `useInfo.ts` must not become a competing owner — re-export only.
- `WorkCard` `v-html="work.description"` stays, but new descriptions are plain text (safe).
- If a needed value is missing from content files → stop and ask (no invented facts).

## Done when
- No phone / LinkedIn / "3 +" anywhere in rendered output.
- Every section renders from `app/content/*`; no hardcoded identity/project/skill data left
  in components.
- Featured order old→new; SpeakType (ai-product) + AKRS (experimental, labeled) correct;
  Park & Fetch in `more_work`.
- Cards with no `url` show no broken "Live" button.
- Type-check passes; dark/light both render.
