# ANTONI.SYS

> Personal blog. Terminal aesthetic. No apologies.

A single-page, static blog built with [Astro](https://astro.build). Phosphor on black. Monospace everywhere. Zero runtime JS for article rendering. Comments via [Giscus](https://giscus.app).

---

## Adding a new article

1. Create a Markdown file in `src/content/articles/`:

```
src/content/articles/YYYY-MM-DD-your-slug.md
```

2. Add frontmatter at the top:

```yaml
---
title: "Your Article Title"
date: 2026-06-01
slug: your-slug
---

Your article body in Markdown here.
```

3. Commit and push. The site rebuilds automatically on Vercel/Netlify/GitHub Pages.

That's it. No CMS. No admin panel. No bullshit.

---

## Setting up Giscus comments

1. Make sure your GitHub repo has **Discussions** enabled (repo Settings → Features → Discussions ✓).
2. Visit [giscus.app](https://giscus.app), connect your repo, choose a category (e.g. **Announcements**).
3. Copy the generated `repo`, `repo-id`, `category`, and `category-id` values.
4. Open `src/components/Giscus.astro` and fill in (or set as env vars):

```ts
const GISCUS_REPO        = 'your-username/your-repo';
const GISCUS_REPO_ID     = 'R_REPLACE_ME';
const GISCUS_CATEGORY    = 'Announcements';
const GISCUS_CATEGORY_ID = 'DIC_REPLACE_ME';
```

Or set environment variables in your Netlify/Vercel dashboard:
- `GISCUS_REPO`
- `GISCUS_REPO_ID`
- `GISCUS_CATEGORY`
- `GISCUS_CATEGORY_ID`

---

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build & preview

```bash
npm run build      # output → dist/
npm run preview    # preview the built site locally
```

---

## Deploy

### Vercel (recommended — zero config)
Push to GitHub, import the repo at [vercel.com](https://vercel.com). Done.

### Netlify
Push to GitHub, import at [netlify.com](https://netlify.com). Build command: `npm run build`. Publish dir: `dist`.

### GitHub Pages
Add `.github/workflows/deploy.yml` — see the Astro docs for the full workflow. Update `site` in `astro.config.mjs` to your GitHub Pages URL first.

---

## Easter eggs

- **Konami code** (↑↑↓↓←→←→BA): triggers a 600ms RGB glitch effect.
- **Boot sequence**: fires once per browser session. Open a private tab to see it again.
- **View source**: read the comments in `<head>`.
- **RSS**: `/rss.xml` — for the retro faithful.

---

```
█  // end of file
```
