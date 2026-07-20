# Plan B — Content Layer

**Capability:** all profile content is editable from typed data modules, not markup.
**Phase:** P1 (Truth & data). **Status:** skeleton built.

**Objectives**
- Maintain `app/content/{profile,social,skills,projects,experience}.ts` as the owners.
- Migrate any remaining hardcoded data out of components into these modules.

**Outputs**
- Updating the profile = editing one data file.

**Dependencies:** `app/types/global.ts`. Memory: `content-layer.md`.
