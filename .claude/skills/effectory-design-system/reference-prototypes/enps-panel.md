# Reference prototype — eNPS side panel

Canonical implementation: [`enps-panel.html`](enps-panel.html) (in this folder).
When the user wants "the eNPS side panel" on its own, **copy that file** into `prototypes/` and adapt. Same dashboard as [`effectiveness-overview.html`](effectiveness-overview.html), opened with the eNPS side panel shown over the page.

Self-contained (CSS + `i18n.js` + `effectiveness.js` inlined); only `tokens.css` / `foundation.css` / `components.css` / `icons.js` (via `<base href="../">`) and Chart.js are external. EN/NL/DE supported.

## What the panel is

A right-hand slide-in panel (`.overlay.is-right` + `.sidepanel`) that explains the group's Employee Net Promoter Score:

- Header: title "Employee net promoter score (eNPS)" + definition + **Insights / Actions** sub-tabs.
- **Your scores** — the calculation as a card row: *Passive | Promoter − Detractor = eNPS*. Each card shows the coloured face icon (passive = yellow, promoter = green, detractor = red), the percentage and the participant count; the eNPS result card is blue with the big score.
- **Compare scores** — a diverging bar chart (0 in the centre, axis −100…0…100): the group (blue), Previous survey, Benchmark and Top 3 benchmark. Bars are green when positive, red when negative; the current group stays blue. Value sits on the 0-side of the bar.
- **Question breakdown** — the recommendation question with a 1–10 score scale (detractors 1–6 red, passives 7–8 yellow, promoters 9–10 green) and a legend, inside a `--bg-secondary` card.
- **Score breakdown** — three bordered cards (Promoters / Passives / Detractors) explaining each group, plus a "Learn why the eNPS is important" link.

## Behaviour (the rules)

1. Opens from the eNPS card on the overview (here it's auto-opened). Dismiss with the close icon, the backdrop, or Esc.
2. The comparison bars are value-driven: the group is always blue; other rows are green when positive, red when negative.
3. All copy and scores are data-driven per variant (`npsPromoters` / `npsPassives` / `npsDetractors` + counts, `npsPrev` / `npsBench` / `npsTop3`; the eNPS itself is promoters − detractors).

## Components used

Side panel (`.overlay.is-right`) · sub-tabs · score-calculation cards · diverging comparison bars · 1–10 scale cells · bordered breakdown cards · link button. Layout is custom CSS but always uses tokens.

## Spacing (design-system rules)

40px between sections (`--spacing-super-loose`), 12px between a section header and its content (`--spacing-base-tight`), 16px gap inside the calculation row and inside the question card. See `design-system-reference.md` → Spacing.
