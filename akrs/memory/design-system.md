# Memory — Design System

Direction & rules: `docs/requirements-and-design.md` §2, §5.

Pointers:
- Aesthetic: dark-first terminal / command-line; monospace headers (`> section`), sans body.
- Motifs: boot sequence (once, skippable), typed reveals, decorative Leader→Worker / token HUD.
- "Better than reference": feel like a terminal *doing AI work*, not a static terminal.
- Hard constraints: honor `prefers-reduced-motion`; no layout shift; AA contrast both themes;
  keep dark/light toggle; lazy-hydrate heavy sections.
- Optional v2: Ctrl+K command palette (not a v1 blocker).
- Inspiration only — never copy `docs/ui.png` / leonvanzyl structure or text.
