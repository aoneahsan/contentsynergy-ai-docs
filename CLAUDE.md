# ContentSynergy AI Docs

**Project Type**: Public documentation site (Docusaurus) for ContentSynergy AI
**Stack**: Docusaurus 3 + React 19 + TypeScript | **Repo**: PUBLIC (`github.com/aoneahsan/contentsynergy-ai-docs`)
**Last Updated**: `2026-06-23`

> This is the docs companion to the app repo `contentsynergy-ai` (PRIVATE). The app lives at
> https://contentsynergy.aoneahsan.com; these docs at https://contentsynergy-ai-docs.aoneahsan.com.

## Task Speed Over Docs (IRON-SOLID — BEHAVIORAL)

Finish the real task fast + correctly FIRST; docs/trackers/sync are a footnote (≤~20% of effort). No new summary/status/completion files unless asked; edit/delete over add. Full rule: `~/.claude/CLAUDE.md`.

## What this repo is

A Docusaurus site documenting ContentSynergy AI's real, shipping features. Content is organized by area: getting-started, content (text/images/video/audio/3D/surveys), publishing, AI & customization, tools, analytics & compliance, platforms, concepts.

## Hard rules

1. **PUBLIC repo — ZERO secrets.** Never commit `.env`, keys, service accounts, or any credential. This is the one repo in the fleet that is public; treat everything in it as world-readable.
2. **Honest framing only.** Document only real features. The app's AI is zero-cost and client-side (open browser models with template/placeholder fallbacks). No fabricated stats, no "best/#1/leading", no claims the app can't back. True ML text-to-video is a deliberate fallback (no paid GPU backend) — say so.
3. **Yarn for local work** (Yarn Berry, `node-modules` linker). Never pnpm. Only `yarn.lock`.
4. **No dev servers by the agent.** Verify with `yarn build` / `yarn typecheck` only.
5. **Single source of contact/URLs:** app `https://contentsynergy.aoneahsan.com`, email `aoneahsan@gmail.com`, docs `https://contentsynergy-ai-docs.aoneahsan.com`.

## Build & verify

```bash
yarn install
yarn build        # must exit 0; emits ./build with sitemap.xml
yarn typecheck
```

## Hosting (dual)

- **GitHub Pages**: `.github/workflows/deploy.yml` on push to `main`; custom domain via `static/CNAME`.
- **Firebase Hosting**: `firebase.json` + `.firebaserc` (site `contentsynergy-ai-docs`); `yarn firebase:deploy`.
- Both deploys are USER-only steps (see the app repo's `docs/MANUAL-TASKS.md`).

## SEO / AEO

`static/robots.txt` allows all major search + AI bots and links the sitemap. `static/llms.txt` indexes the site for LLMs. `docusaurus.config.ts` injects JSON-LD (WebSite, Organization, SoftwareApplication) and per-page OG/Twitter metadata. Sitemap auto-emits on build. Content tracker (in the app repo): `docs/tracking/contentsynergy-ai-docs-content-tracker.json`.

## CLAUDE.md & AGENTS.md Dual-Sync (IRON-SOLID)

Every rule here also lives in `AGENTS.md`. Update one → update the other.
