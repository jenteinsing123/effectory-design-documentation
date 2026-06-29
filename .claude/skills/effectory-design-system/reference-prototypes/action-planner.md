# Reference prototype — Action Planner (pinboard & actions)

Canonical implementation: [`action-planner.html`](action-planner.html) (in this folder).
When the user asks for "the action planner / actions tab / pinboard", **copy that file** into `prototypes/` and adapt — it is the source of truth for layout, states and behaviour. Don't reinvent it. It is the same results-dashboard app opened on the **Actions** tab (`renderOverview('team-it-after','actions')`), so it shares the chrome and side panels with [`effectiveness-overview.html`](effectiveness-overview.html).

The file is **self-contained**: the dashboard CSS, the `i18n.js` translation layer and the `effectiveness.js` renderer are inlined. It only needs the bundled `tokens.css`, `foundation.css`, `components.css` and `icons.js` (resolved via `<base href="../">`), plus Chart.js from the CDN.

## What the screen is

The **Action Planner** inside the app shell (`.mainnav` + breadcrumb + results header with `.tabs`). The Actions tab shows a pinboard table:

- Header row: **Action Planner** title + "Pinboard & actions" subtitle, **Watch tutorial** link, **Search** field, **Export** menu (PDF / Excel), **Custom pin** button.
- A table of pinned subjects with sortable columns: **Topic**, **Score**, **Goal** (Improve / Promote / Contemplate chip), **Action progress** (done/total bar), and a per-row kebab menu (edit, add action, remove).
- Rows come from three sources: seeded items, items pinned from the Scores / Themes / Overview cards, and custom pins. A row opens the matching subject's **Actions side panel** (goal, description, checkable to-do list with due date + assignee).

## Behaviour (the rules)

1. **Goal is shared per subject.** A subject's goal (set via a card pin, the Focus View, or the side-panel dropdown) is the same value everywhere — the pin, the planner row and the side-panel dropdown all reflect it.
2. **Pinning adds a row.** Setting a goal on a Scores/Theme/Overview card pins the subject into the planner; removing the goal unpins it.
3. **Add action** appends a checkable to-do (inline editable: text, due date, assignee); checking items drives the progress bar and the Actions-tab count.
4. **Custom pin** creates a free-form row that starts on Contemplate.
5. **Sort** by clicking a column header; **Export** and the row **kebab** open menus.
6. Group switch (Team IT ↔ Novanta), period switch (Q2 ↔ Q3) and EN/NL/DE language switch work as in the rest of the app and re-render in place.

## Data

Four built-in variants in `DATA`: `team-it-before`, `team-it-after`, `novanta-before`, `novanta-after`. The planner seeds a few example subjects with goals and actions; the renderer is data-driven — change a variant's values, not the markup.

## Components used

Main nav · Breadcrumb · Tabs · Search field · Buttons (primary / secondary / link) · Menus (export, kebab) · Goal chips · Progress bar · Checkbox · Avatar · Side panel (`.overlay.is-right`) · Date picker · Chart.js (in sibling views). Table layout is custom CSS but always uses tokens.

## Prototype-only (simulation, not production)

- Export does not produce a real file; the menu is illustrative.
- Seeded actions/goals are sample content.
- Translations live in the inlined `i18n.js` map; missing keys fall back to English.
