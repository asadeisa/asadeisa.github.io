# Memory — Projects & the two AI registers

Owner (code): `app/content/projects.ts` · Facts: `docs/source-of-truth.md` §6

Featured order (fixed, old → new): Hadiawada → Wefaq → Balsa → SpeakType → AKRS.
Secondary: Park & Fetch (metric: 100 SEO).

The two AI registers (keep distinct — `docs/requirements-and-design.md` §2):
- **SpeakType** = shipped open-source AI product → `kind: 'ai-product'`.
- **AKRS** = experimental workflow concept → `kind: 'experimental'`, keep the
  `label` "Experimental · V0 · ongoing". **Never present AKRS as finished.**

Linking rule: only public, recent repos in `gitUrl`. Never link old/private repos
(mastringEnglish, laravel, mycima, …) or Delivaz (backend closed).
Dropped demos: Burger Spot, Fake Store, Canteens Tech.

Presentation (decided 2026-06-28): work is shown as a **terminal "run-log" listing**
(`app/components/Ui/WorkList.vue`), NOT image cards — text-first, no project screenshots.
Each row = status glyph + `[kind]` tag + title + `summary` + `▸ live`/`▸ repo`, expandable to
full `description` + stack + `metric`/`label`. `Work.image` is deprecated/unused; rows use the
new `Work.summary` one-liner. (Old `Ui/WorkCard.vue` deleted.) This is what makes the page read
as a terminal *doing AI work* rather than a product catalog.
