# effectory-design-documentation

## Contributor setup

After cloning, enable the versioned git hooks once:

```bash
git config core.hooksPath .githooks
```

This activates the **pre-commit guard against inline SVG icons** in `*-docs.html`
and `index.html` — per CLAUDE.md §14, icons must use `<i data-icon="name">` from
the library. The hook silently allows:

- Do/Don't tick SVGs (`fill="#16a34a"` / `fill="#dc2626"`)
- Tab bar icons inside `<button class="page-tab">`
- Anything preceded by `<!-- icon-exempt: reason -->`

If you genuinely need a decorative inline SVG, annotate it:

```html
<!-- icon-exempt: callout line in anatomy figure -->
<svg ...>...</svg>
```
