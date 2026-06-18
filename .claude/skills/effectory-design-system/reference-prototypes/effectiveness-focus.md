# Reference prototype — Effectiveness results dashboard (Focus View)

Canonical implementation: [`effectiveness-focus.html`](effectiveness-focus.html) (in this folder).
This is the **same app** as [`effectiveness-overview.html`](effectiveness-overview.html), opened on the **Focus View** tab. See [`effectiveness-overview.md`](effectiveness-overview.md) for the shell, the group/period/language switching, the side panels and the data model — all identical. When the user asks for "the focus view / focus areas page", **copy this file** into `prototypes/` and adapt.

Self-contained: dashboard CSS, `i18n.js` and `effectiveness.js` are inlined; illustration SVGs are data URIs; only `tokens.css` / `foundation.css` / `components.css` / `icons.js` (via `<base href="../">`) and Chart.js are external.

## What the screen is

An action-oriented **Focus View** of the same survey results, in three sections:

1. **At first glance** — a verdict ("Your team is effective", quadrant-coloured **hand-drawn underline**), two stat cards (*is engaged* / *can perform effectively*) with trend and an **Explore** link (opens the Effectiveness side panel), a "What does this mean?" explanation, and the effectiveness matrix.
2. **What needs focus** — the lowest-scoring questions as cards: question + theme + orange score badge, relevance link buttons (thumbs up / down), a divider, then **Pick an approach** radio chips (Team action / 1:1 action / Process change / Personal action). Selecting one highlights the chip, gives the card the active warning-tint border, and reveals a **recommended-action card** (eyebrow, title, effort badge, body, "Add to action planner" primary button).
3. **Celebrate your wins** — the highest-scoring questions as simple green-bordered cards.

A mini Response rate / eNPS stat row sits top-right. The two block backgrounds use the brand gradients (warm for focus, green for wins).

## Behaviour (the rules)

Same shell rules as the Overview (see `effectiveness-overview.md`): Overview ↔ Focus View tabs, **Filter** toggles group, **survey name / date** toggles period, sidebar name opens the **EN/NL/DE** language popover, blur transition between pages.

Focus-specific:
1. Picking an approach radio reveals the matching recommended-action card; switching approach swaps its content. Content is keyed per approach (`RECO`).
2. The verdict word and its underline colour are driven by the group's quadrant (effective = green, ineffective = red, not fully utilized = yellow, detached = grey).
3. "Explore" on either stat card opens the Effectiveness side panel.

## Components used

Same as the Overview, plus: bordered radio buttons (`rb-btn-bordered`), score badges, gradient section backgrounds, and the hand-drawn verdict underline (CSS mask of an inlined SVG).

## Prototype-only (simulation, not production)

- Recommended-action copy for non-1:1 approaches is placeholder ("lorem ipsum").
- Focus questions / wins are the three lowest / highest scores from the active variant's data, with themes layered on for display.
