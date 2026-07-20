# Memory — Content Layer

All editable profile data lives in typed modules. One owner per concept. Components
render from these — never hardcode content in markup. Rules: `docs/requirements-and-design.md` §6.

| Concept | Owner |
|---|---|
| Identity / contact | `app/content/profile.ts` |
| Social links | `app/content/social.ts` |
| Skills (grouped chips) | `app/content/skills.ts` |
| Projects (featured + secondary) | `app/content/projects.ts` |
| Experience timeline | `app/content/experience.ts` |
| Shared types | `app/types/global.ts` (`Work`, `SkillGroup`, `ExperienceRole`, `WorkKind`) |

To update the profile: edit the data file, not the component.
