# AKRS Router — Portfolio

> Navigation only. No explanations, no implementation. Answers one question:
> **"Where should execution continue?"** Spec: `docs/work-flow-ai/`.

## Source of Truth (read before any work)
- Facts → `docs/source-of-truth.md`
- Requirements & Design → `docs/requirements-and-design.md`

## By intent → go to

| If the request is about… | Go to |
|---|---|
| Name, title, email, location, CV, years, languages | `akrs/memory/identity.md` |
| Where content lives / editing data | `akrs/memory/content-layer.md` |
| Projects, featured set, SpeakType vs AKRS, links | `akrs/memory/projects.md` |
| Skills chips / groups | `akrs/memory/content-layer.md` → `app/content/skills.ts` |
| Experience timeline | `akrs/memory/content-layer.md` → `app/content/experience.ts` |
| Sections / page structure / IA | `akrs/plans/C-narrative-ia.md` |
| Look, theme, animation, terminal motif | `akrs/memory/design-system.md` |
| Performance, a11y, SEO, responsive | `akrs/plans/F-quality-gate.md` |

## Plans index
- A → `akrs/plans/A-identity-contact.md`
- B → `akrs/plans/B-content-layer.md`
- C → `akrs/plans/C-narrative-ia.md`
- D → `akrs/plans/D-projects-ai-story.md`
- E → `akrs/plans/E-visual-motion.md`
- F → `akrs/plans/F-quality-gate.md`

## Runtime priority (per Boot Protocol)
Road → Memory → Router → Repository. Tasks & Roads are generated on demand (Mode 3).
