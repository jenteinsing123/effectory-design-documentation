# Reference prototype — Effectiveness matrix side panel

Canonical implementation: [`effectiveness-panel.html`](effectiveness-panel.html) (in this folder).
When the user wants "the effectiveness side panel / the matrix panel" on its own, **copy that file** into `prototypes/` and adapt. It is the same dashboard as [`effectiveness-overview.html`](effectiveness-overview.html) but opens with the Effectiveness side panel already shown over the page.

Self-contained (CSS + `i18n.js` + `effectiveness.js` inlined, illustrations as data URIs); only `tokens.css` / `foundation.css` / `components.css` / `icons.js` (via `<base href="../">`) and Chart.js are external. EN/NL/DE supported.

## What the panel is

A right-hand slide-in panel (`.overlay.is-right` + `.sidepanel`) that explains the group's effectiveness:

- Header: title, subtitle, and **Insights / Actions** sub-tabs.
- Lead verdict ("Team IT is effective", quadrant-coloured underline) + description.
- Controls: a **Comparisons** dropdown (Organization Level / Previous survey / Group Level below — toggles which markers show) and a **Matrix / List** segmented control.
- The **2×2 matrix** (Detached / Effective / Ineffective / Not fully utilized) with the current group, the org, the previous survey and the group-level-below markers, plus benchmark badges. Each marker has a hover tooltip with its engagement / performance-environment scores.
- **Suggested focus** (intro, bullets, closing), **Areas to focus on** (score rows vs benchmark), and a **Graph legend**.

## Behaviour (the rules)

1. Opens from the Effectiveness card on the overview (here it's auto-opened). Dismiss with the close icon, the backdrop, or Esc.
2. **Comparisons** dropdown toggles marker visibility per level and updates the "N selected" count. At organization level there is no "Organization Level" row (nothing above it).
3. Marker positions are scores — don't move a marker to avoid overlap; move its **label** instead.
4. Verdict word + benchmark badges + score rows are data-driven per variant.

## Components used

Side panel (`.overlay.is-right`) · sub-tabs · Selection button + dropdown + Checkbox · Segmented control · quadrant matrix (custom, tokens) · benchmark badges · tooltips · score rows.
