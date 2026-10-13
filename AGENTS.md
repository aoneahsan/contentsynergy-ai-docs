# ContentSynergy AI public docs

**Context verified:** 2026-10-13. **Next routine pass:** 2026-11-12. **Repository:** public `aoneahsan/contentsynergy-ai-docs` main.

This Docusaurus site is the independent public documentation repository nested in `../contentsynergy-ai-root/`. Its private app sibling is `../contentsynergy-ai/` main. The verified docs URL is `https://contentsynergy-docs.aoneahsan.com/`; the app URL is `https://contentsynergy.aoneahsan.com/`. The old `contentsynergy-ai-docs.aoneahsan.com` hostname did not resolve on 2026-10-13. `static/CNAME` and `docusaurus.config.ts` already use the verified host.

## Working rules

- This repository is public: no `.env`, keys, service accounts, private data or test credentials. Use yarn locally, pinned by `packageManager`/`yarn.lock`.
- Document only verified product behavior. The app uses client-side models and fallback flows; do not promise paid GPU processing or invent statistics. Product facts come from app code, its project rules, the URL registry and current release evidence.
- `docs/` owns pages; `src/` owns site UI; `static/` holds CNAME, robots/LLM files and assets. Keep links/slugs consistent with Docusaurus routing and build validation. Contact email is `aoneahsan@gmail.com`.
- `yarn install --immutable`, `yarn typecheck`, `yarn build` are the checks. Serve the exact production build in a controlled desktop/mobile browser before any main push; `deploy-pages.yml` publishes GitHub Pages on each main push. Verify the Pages run and live routes afterward.
- No Firebase config files are checked into this docs repository. A preview script in `package.json` is not evidence of a configured Firebase Hosting target; do not deploy there without verifying a target and authority. No product copy rewrite or docs publication beyond factual maintenance in Pass 1.

Fleet state and 30-day eligibility: `/home/ahsan/Documents/01-code/docs/tracking/fleet-maintenance-tracker.json` and `project-context-budget-tracker.json`. Keep this guide and `CLAUDE.md` byte-identical. Do not merge the private `project-root` branch into either product main branch.
