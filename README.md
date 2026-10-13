# ContentSynergy AI — Documentation

Public documentation site for **[ContentSynergy AI](https://contentsynergy.aoneahsan.com)**, a zero-cost, browser-based AI studio for creating and scheduling social media content. Built with [Docusaurus](https://docusaurus.io/).

- **Live docs:** https://contentsynergy-docs.aoneahsan.com
- **App:** https://contentsynergy.aoneahsan.com
- **Google Play:** https://play.google.com/store/apps/details?id=com.aoneahsan.contentsynergy
- **Author:** [Ahsan Mahmood](https://aoneahsan.com)

## Local development

This repo is **yarn-only** (Yarn Berry, `node-modules` linker).

```bash
yarn install --immutable  # install pinned dependencies
yarn start        # local dev server on http://localhost:5962
yarn build        # production build into ./build
yarn typecheck    # tsc --noEmit
```

## Hosting

GitHub Pages publishes the site from `.github/workflows/deploy-pages.yml` on each push to `main`. The custom domain is `contentsynergy-docs.aoneahsan.com`, matching `static/CNAME` and `docusaurus.config.ts`; it returned HTTPS 200 on 2026-10-13. Build and inspect the exact output in a controlled browser before pushing a change that publishes.

No Firebase Hosting config files are checked into this repository. A preview script exists in `package.json`, but no Firebase docs deployment is verified by this README.

## Structure

```
docs/                 # all documentation pages (Markdown)
  intro.md
  getting-started/    # installation, quick-start
  content/            # text, images, video, audio, 3D, surveys
  publishing/         # social platforms, scheduling, templates
  ai/                 # how-ai-works, fine-tuning, themes
  tools/              # tools catalog
  analytics/          # dashboard, privacy/GDPR, multi-language
  platforms/          # web, android, browser-extension, desktop
  concepts/           # architecture, zero-cost model
  about-the-author.md
src/                  # landing page + theme CSS
static/               # robots.txt, llms.txt, CNAME, images, security.txt
docusaurus.config.ts  # site config + JSON-LD (WebSite/Org/SoftwareApplication)
sidebars.ts           # sidebar layout
```

## Content principles

The documentation describes only the real, shipping feature set, with honest framing of the zero-cost, client-side AI model (open browser models with template/placeholder fallbacks). No fabricated stats, no hype, no claims the app can't back. License: MIT.
