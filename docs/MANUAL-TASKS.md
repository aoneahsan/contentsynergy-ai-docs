# Manual / User-Only Tasks — Contentsynergy Ai Docs

> The ONE place for everything only you (the human) can do. Fixed path: `docs/MANUAL-TASKS.md`.
> Global spec: `~/.claude/rules/manual-tasks.md`. Excluded from the published site (see
> `docusaurus.config.ts` → `docs.exclude`) because this repo is public.
> Last updated: 2026-07-25

## ⏳ Pending manual tasks

| # | Task | Why only you | Status |
|---|------|--------------|--------|
| 1 | **Add DNS.** In Hostinger, add a `CNAME` record `contentsynergy-docs` → `aoneahsan.github.io` on `aoneahsan.com`. | Only you control the `aoneahsan.com` DNS zone. | ☐ Not started |
| 2 | **Delete the orphaned old record.** The docs domain was renamed from `contentsynergy-ai-docs.aoneahsan.com` → `contentsynergy-docs.aoneahsan.com` (it must derive from the project's deployed domain, not the repo folder name). Remove the stale record. | Same DNS zone. | ☐ Not started |
| 3 | **Configure GitHub Pages.** Repo **Settings → Pages**: source = **GitHub Actions**, custom domain = `contentsynergy-docs.aoneahsan.com`, then **Enforce HTTPS** once the certificate provisions. | Repo settings are owner-only. | ☐ Not started |

`static/CNAME` already ships `contentsynergy-docs.aoneahsan.com` inside `build/`, and `.github/workflows/deploy-pages.yml` builds and
publishes on every push to `main` — these steps are all that remain.

## ✅ Completed manual tasks

| # | Task | Resolution | Date |
|---|------|-----------|------|
| — | — | — | — |
