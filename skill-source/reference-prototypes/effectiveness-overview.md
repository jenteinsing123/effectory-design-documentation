# Reference prototype — Effectiveness results dashboard (Overview)

Canonical implementation: [`effectiveness-overview.html`](effectiveness-overview.html) (in this folder).
When the user asks for "the results overview / effectiveness dashboard", **copy that file** into `prototypes/` and adapt — it is the source of truth for layout, states and behaviour. Don't reinvent it. Its sibling [`effectiveness-focus.html`](effectiveness-focus.html) is the same app opened on the Focus View tab.

Both files are **self-contained**: the dashboard CSS, the `i18n.js` translation layer and the `effectiveness.js` renderer are inlined, and the three illustration SVGs are embedded as data URIs. They only need the bundled `tokens.css`, `foundation.css`, `components.css` and `icons.js` (resolved via `<base href="../">`), plus Chart.js from the CDN.

## What the screen is

A survey-results **Overview** inside the app shell (`.mainnav` + breadcrumb + results header with title, filter, date range and `.tabs`). The Overview tab shows a card grid:

- **Effectiveness** — a 2×2 quadrant matrix (Detached / Effective / Ineffective / Not fully utilized) with positioned group markers; click it to open the **Effectiveness side panel**.
- **Engagement** — big % with a wave fill and benchmark bar; click it to open the **Engagement side panel**.
- **eNPS** — donut + promoters / passives / detractors rows.
- **Themes** — radar (current vs previous).
- **Response rate** — open gauge + participants + benchmark.
- **Workload / Retention / Well-being** — three small KPI gauges.
- **Feel-good topics** — ranked topic tiles.
- **Highest scores / Lowest scores** — question lists.
- An **AI Summary** banner above the grid (expandable: strengths, growth areas, suggested actions).

## Behaviour (the rules)

1. **Two views, one app:** `Overview` and `Focus View` tabs swap the rendered content in place (no reload). This file opens on Overview; `effectiveness-focus.html` opens on Focus View.
2. **Group switch:** clicking the header **Filter** button toggles the current group between **Team IT** (team level) and **Novanta** (organization level), keeping the active view. At org level there is no "Organization Level" comparison row.
3. **Period switch:** clicking the **survey name** or the **date range** toggles the survey period between **Q2** (before) and **Q3** (after), keeping group and view.
4. Group/period switches navigate between sibling pages named `{group}-{period}-{view}.html` (e.g. `team-it-after-overview.html`) and animate with a full-screen **blur focus-pull** (View Transitions API). In a single copied file these targets won't exist yet — generate the matching set, or stub the navigation, when adapting.
5. **Language:** clicking the user's name in the sidebar opens a popover to switch **English / Nederlands / Deutsch**; the choice persists in `localStorage` and re-renders in place. Team names (Team IT, Novanta) and numbers stay; everything else translates.
6. **Side panels:** the Effectiveness and Engagement cards open right-hand `.overlay.is-right` side panels (Esc / backdrop / close-icon to dismiss).

## Data

Four built-in variants in `DATA`: `team-it-before`, `team-it-after`, `novanta-before`, `novanta-after`. Numbers are consistent across views (e.g. Team IT engagement 56% → 67%, Novanta 66% → 72%). The renderer is data-driven — change a variant's values, not the markup.

## Components used

Main nav · Breadcrumb · Tabs · Selection button · Icon buttons + tooltips · Cards · Side panel (`.overlay.is-right`) · Radio (bordered) · Buttons (primary / secondary / link) · Checkbox · Chart.js (doughnut gauges, radar, line). Layout, charts and the quadrant matrix are custom CSS but always use tokens.

## Prototype-only (simulation, not production)

- Charts use Chart.js (CDN) configured inline; gauges use a custom `endDot` plugin.
- The recommended-action cards in Focus View use placeholder ("lorem ipsum") copy for approaches other than the 1:1 example.
- Translations live in the inlined `i18n.js` map; missing keys fall back to English.
