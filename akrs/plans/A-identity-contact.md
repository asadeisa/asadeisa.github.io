# Plan A — Identity & Contact truth

**Capability:** every identity/contact value on the site is correct, centralized, and honest.
**Phase:** P1 (Truth & data).

**Objectives**
- Drive Hero/About/Footer from `app/content/profile.ts` + `social.ts`.
- Remove phone everywhere; remove LinkedIn link; set years to `5+`.

**Outputs**
- No hardcoded identity strings in components.
- No phone, no LinkedIn in rendered output.

**Dependencies:** Plan B (content layer) exists. Memory: `identity.md`.
