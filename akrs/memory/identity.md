# Memory — Identity & Contact

Owner (code): `app/content/profile.ts`, `app/content/social.ts`
Facts: `docs/source-of-truth.md` §2 · Rules: `docs/requirements-and-design.md` §3.1

Key constraints (do not violate):
- Phone is **hidden** — never render it publicly.
- LinkedIn is **removed** — no link anywhere.
- Email displayed: value in `profile.ts` (`asad.eisa.dev@gmail.com`).
- Years of experience: `5+` (not "3+").
- GitHub is the only public social link.
