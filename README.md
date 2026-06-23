# ContentSynergy AI — Documentation

Public documentation site for **[ContentSynergy AI](https://contentsynergy.aoneahsan.com)**, a zero-cost, browser-based AI studio for creating and scheduling social media content. Built with [Docusaurus](https://docusaurus.io/).

- **Live docs:** https://contentsynergy-ai-docs.aoneahsan.com
- **App:** https://contentsynergy.aoneahsan.com
- **Google Play:** https://play.google.com/store/apps/details?id=com.aoneahsan.contentsynergy
- **Author:** [Ahsan Mahmood](https://aoneahsan.com)

## Local development

This repo is **yarn-only** (Yarn Berry, `node-modules` linker).

```bash
yarn install      # install dependencies
yarn start        # local dev server on http://localhost:5962
yarn build        # production build into ./build
yarn typecheck    # tsc --noEmit
```

## Hosting (dual)

The site deploys to two targets:

1. **GitHub Pages** — `.github/workflows/deploy.yml` builds and publishes on every push to `main`. The custom domain comes from `static/CNAME` (`contentsynergy-ai-docs.aoneahsan.com`). Enable Pages → "GitHub Actions" in repo settings, then add the DNS CNAME at your registrar.
2. **Firebase Hosting** (optional second target) — `firebase.json` + `.firebaserc` target the Firebase site `contentsynergy-ai-docs`. Create the Hosting site once, then:

   ```bash
   yarn firebase:deploy
   ```

Both are deploy steps the repo owner performs — see the parent app's `docs/MANUAL-TASKS.md`.

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
