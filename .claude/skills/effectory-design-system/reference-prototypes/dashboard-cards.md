# Reference prototype — Results dashboard card library

Canonical implementation: [`dashboard-cards.html`](dashboard-cards.html) (in this folder).
This is the results-dashboard **card grid on its own** (nav, breadcrumb, header and AI summary hidden) so you can **copy a single card** into another screen, or pick which cards a dashboard should show. Same renderer as [`effectiveness-overview.html`](effectiveness-overview.html).

Self-contained (CSS + `i18n.js` + `effectiveness.js` inlined, illustrations as data URIs); external `tokens.css` / `foundation.css` / `components.css` / `icons.js` (via `<base href="../">`) + Chart.js. EN/NL/DE supported.

## The cards (each is reusable on its own)

- **Effectiveness** (`.fx-card`) — 2×2 quadrant matrix with group markers; opens the Effectiveness side panel.
- **Engagement** (`.eng-card`) — big %, wave fill, benchmark bar; opens the Engagement side panel.
- **Employee Net Promoter Score** (`.nps-card`) — donut + promoters / passives / detractors.
- **Themes** (`.sw-card`) — radar, current vs previous.
- **Response rate** (`.rr-card`) — open gauge + participants + benchmark.
- **Workload / Retention / Well-being** (`.kpi-stack` → `.kpi-card`) — three small KPI gauges.
- **Feel-good topics** (`.tp-card`) — ranked topic tiles.
- **Highest scores / Lowest scores** (`.qs-card.is-high` / `.is-low`) — question lists.

## How to use

To reuse one card, copy its block from `.ov-grid` plus the matching CSS section and (if it has a chart) its Chart.js init from the renderer. All cards are 384×456 with `var(--sh-card)`; the grid is `repeat(3, minmax(0,384px))` with a 24px gap.

## Behaviour

Cards are data-driven per variant (`team-it-before/after`, `novanta-before/after`). The Effectiveness and Engagement cards are clickable (open their side panels); the rest are display-only with pin / info / settings icon buttons.
