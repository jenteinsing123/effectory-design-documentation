# Reference prototype — Engagement side panel

Canonical implementation: [`engagement-panel.html`](engagement-panel.html) (in this folder).
When the user wants "the engagement side panel" on its own, **copy that file** into `prototypes/` and adapt. Same dashboard as [`effectiveness-overview.html`](effectiveness-overview.html), opened with the Engagement side panel shown over the page.

Self-contained (CSS + `i18n.js` + `effectiveness.js` inlined); only `tokens.css` / `foundation.css` / `components.css` / `icons.js` (via `<base href="../">`) and Chart.js are external. EN/NL/DE supported.

## What the panel is

A right-hand slide-in panel (`.overlay.is-right` + `.sidepanel`) that explains the group's engagement:

- Header: title + **Insights / Actions** sub-tabs (Actions shows a count).
- **What does "Engagement" mean?** — definition paragraph.
- **Engaged employees** — a Disengaged / Potentials / Engaged distribution bar.
- **What are the results?** — comparison cards (the group, the level above, Benchmark) and a **score-over-time** line chart. At organization level the "level above" card is dropped.
- **Theme questions** — question rows with group scores.
- **Strongly correlating questions** — numbered question rows.

## Behaviour (the rules)

1. Opens from the Engagement card on the overview (here it's auto-opened). Dismiss with the close icon, the backdrop, or Esc.
2. Comparison cards split evenly across the full width (two → 50/50, three → thirds).
3. All copy and scores are data-driven per variant.

## Components used

Side panel (`.overlay.is-right`) · sub-tabs · distribution bar · comparison cards · Chart.js line chart · question rows.
