# Reports page — functionality & rules

Prototype: [`prototypes/reports.html`](reports.html)
Live: https://jenteinsing123.github.io/effectory-design-documentation/prototypes/reports.html

A survey results **Reports** page where a user downloads reports. Two groups:

- **Essential reports** — Standard Group Results (PPT), Management Summary (PDF), Answer Distribution (PPT)
- **Deep-dive reports** — Raw Data: Anonymized / Pseudonymous / Non-anonymized (XLS)

---

## Download flow

1. Click a report row → **Choose a language** dialog.
2. Select a language → **Download…**.
3. What happens next depends on the report type and on whether that language was generated before.

---

## Generation rules

- **Generation starts immediately** when the user clicks *Download…* — keyed per **(report, language)**.
- **The list row reflects it right away** (not only after the dialog closes): the download button is replaced by a loader + label
  - one language → **"Generating in {language}"**
  - multiple at once → **"Generating in {n} languages"**
- **Download dialog is identical for all report types.** Same title ("Download reports"), same body copy ("We are working hard to generate your file…"), same grey-file + spinner *Generating* card. The card's sub-line shows the **actual selected language** (e.g. "German"), not a generic phrase.
  - *Generating* state: grey file icon + spinner + selected language.
  - *Done* state: green file icon + **"Done! The report will download automatically"** with a **"Download does not start? Click here"** fallback link.
  - **Longer-running hint (raw data):** if generation is still running after **4 seconds** (`LONGER_HINT_MS`), the dialog smoothly expands (animated, no layout jump) an **info callout** — info icon + *"No need to wait around — you can keep doing other things in My Effectory and we'll notify you as soon as your report is ready to download."* — plus a **"Notify me"** button. (Essential reports finish first, so they never show it.)
  - The dialog has no footer otherwise; it closes via the **✕**, backdrop click, or `Esc`.
- **Stay in the dialog until ready** → it switches to the *Done* state (file downloads automatically).
- **Close / Notify me before ready** (raw data) → generation continues **in the background**; when finished a **system notification** appears **top-right**.
- **No regeneration / caching** — once a (report, language) is generated it is remembered. Requesting that same language again → **downloads directly** (the dialog opens straight in the *Done* state, no generating step).

### System notification (when generated in the background)

- Uses the design-system **System Notification** (`.sysnotif`) — dark card, green left border, top-right.
- **Everything sits in the title** — *"{report name} is ready to download in {language}"* (no separate description line), with a **Download** action and a dismiss ✕.

### Language picker reflects per-report state

- A language that is **currently generating** for this report shows a **"Generating…"** badge and its radio is **disabled** (can't be triggered again). Selection auto-moves to the first free language.
- A language that is **already generated** shows a green **"Ready"** badge and stays selectable → downloads directly.

---

## Report-type differences

| | Essential (PPT/PDF) | Raw Data (XLS) |
|---|---|---|
| Generation time | Quick (near-instant) | Long — up to ~10 minutes |
| Dialog (start) | Identical for both — same copy + generating card showing the selected language | |
| Longer-running hint | Never (finishes first) | Info callout + **Notify me** after 4s |
| Typical pattern | Wait in dialog → Done → auto-download | Notify me / close → background → system notification |

---

## Design-system components used

Main navigation · Breadcrumb (with **Back**) · Tabs · Selection button (filter) · Date range (uses the `from-to` icon) · Dialog (small header) · Radio · Button · **System Notification** (`.sysnotif`) · file-type icons (`ppt-file` / `pdf-file` / `xls-file`, full-colour `<img>`, plus `file-loading` / `file-ready` in the dialog).

---

## Prototype-only simulation notes (not production behaviour)

- Timings are simulated: `RAW_GEN_MS = 30000` (real-world ~10 min), `QUICK_GEN_MS = 800`, `LONGER_HINT_MS = 4000` (when the raw-data "Notify me" callout appears).
- Generation/ready state lives in-memory per row (`row._gen = { generating: [], ready: [] }`); nothing is persisted.
- File-type icons are multi-colour, so they're loaded via `<img>`, **not** `data-icon` (which would normalise the colours).
- The served `components.css` ships a stripped `.sysnotif-action`; the prototype restores the text-link styling inline. **Worth aligning the bundled `components.css`.**
- `<base href="../">` (relative) is used so the page works both via the local server and from the GitHub Pages subpath.

## Open questions for engineering

- Angular API/selectors for the Dialog, Side panel and System Notification are not yet confirmed in the styleguide.
- Concurrent multi-language generation + the "remember generated languages" cache is **app orchestration** — confirm where that state should live (per user / per project) and how long a generated file stays downloadable.
