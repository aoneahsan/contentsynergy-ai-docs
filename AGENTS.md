# AGENTS.md — ContentSynergy AI Docs

> Agent instructions for the ContentSynergy AI documentation site.
> **Last Updated:** 2026-06-23 | **Repo**: PUBLIC (`github.com/aoneahsan/contentsynergy-ai-docs`)

This is the docs companion to the PRIVATE app repo `contentsynergy-ai`. App: https://contentsynergy.aoneahsan.com · Docs: https://contentsynergy-ai-docs.aoneahsan.com.

## Task Speed Over Docs (IRON-SOLID — BEHAVIORAL)

Finish the real task fast + correctly FIRST; recording is a footnote (≤~20% of effort). No new summary/status files unless asked; edit/delete over add. Full rule: `~/.claude/CLAUDE.md`.

## Hard rules

1. **PUBLIC repo — ZERO secrets.** Never commit `.env`, keys, service accounts, or any credential.
2. **Honest framing only.** Document only real, shipping features. The AI is zero-cost and client-side (open browser models + template/placeholder fallbacks). No fabricated stats, no "best/#1/leading", no unsupported claims. True ML text-to-video is a deliberate fallback (no paid GPU backend) — state it.
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
- Both deploys are USER-only (see the app repo's `docs/MANUAL-TASKS.md`).

## SEO / AEO

`static/robots.txt` (search + AI bot allowlist + sitemap link), `static/llms.txt` (LLM index), JSON-LD (WebSite/Organization/SoftwareApplication) + OG/Twitter metadata in `docusaurus.config.ts`, auto-emitted sitemap. Content tracker (app repo): `docs/tracking/contentsynergy-ai-docs-content-tracker.json`.

## Gitignore Hygiene (IRON-SOLID)
`.gitignore` stays current with the project structure — ignore only recoverable artifacts (build/`dist`/`www`/`node_modules`/logs/caches/IDE), never lose source. Custom rules always present: `*.ignore.*`, `project-record-ignore/`. This is a **PUBLIC** repo -> secrets/`.env`/keystores are NEVER tracked.
Full rule + private/public protocol: `~/.claude/rules/project-config.md`.
Gitignore Last Verified: 2026-06-24

## CLAUDE.md & AGENTS.md Dual-Sync (IRON-SOLID)

Every rule here also lives in `CLAUDE.md`. Update one → update the other.
