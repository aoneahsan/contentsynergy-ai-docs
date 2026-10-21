## 🔴 CRITICAL — PROJECT FROZEN (2026-10-21)

**This is an idea project. It was frozen on 2026-10-21 at commit `e249d14592cec093fcc213683ca2f6d57df4f18a` on branch `main`.**

- Do **NOT** edit, fix, upgrade, build, deploy, document or "improve" anything in this repository.
- It will only ever be **rebuilt from scratch** as `~/Documents/01-code/production-projects/contentsynergy-ai-root/`
  (this code cloned beside it as `contentsynergy-ai-old/` for reference), with a click dummy, a Story Bible, a Supabase
  backend and a docs site — and **only when the owner types, in ALL CAPS, an explicit request naming this
  project**.
- Any other request to work here is refused. Rule: `~/.claude/rules/idea-projects-frozen.md`.
- Ledger: private repo `aoneahsan/projects-finalization-record` → `idea-projects/FREEZE-LEDGER.md`.

---

# ContentSynergy AI public docs

**Last Updated:** 2026-10-21

**Context verified:** 2026-10-13. **Next routine pass:** 2026-11-12. **Repository:** public `aoneahsan/contentsynergy-ai-docs` main.

This Docusaurus site is the independent public documentation repository nested in `../contentsynergy-ai-root/`. Its private app sibling is `../contentsynergy-ai/` main. The verified docs URL is `https://contentsynergy-docs.aoneahsan.com/`; the app URL is `https://contentsynergy.aoneahsan.com/`. The old `contentsynergy-ai-docs.aoneahsan.com` hostname did not resolve on 2026-10-13. `static/CNAME` and `docusaurus.config.ts` already use the verified host.

The maintenance baseline is Node 24.13.0, Yarn 4.18.1, Docusaurus 3.10.2, React 19.3.1, and TypeScript 6.0.3. TypeScript 7 remains blocked pending ecosystem support.

## Working rules

- This repository is public: no `.env`, keys, service accounts, private data or test credentials. Use yarn locally, pinned by `packageManager`/`yarn.lock`.
- Document only verified product behavior. The app uses client-side models and fallback flows; do not promise paid GPU processing or invent statistics. Product facts come from app code, its project rules, the URL registry and current release evidence.
- `docs/` owns pages; `src/` owns site UI; `static/` holds CNAME, robots/LLM files and assets. Keep links/slugs consistent with Docusaurus routing and build validation. Contact email is `aoneahsan@gmail.com`.
- `yarn install --immutable` and `yarn gates` are the checks. Serve the exact production build in a controlled desktop/mobile browser before any main push; `deploy-pages.yml` publishes GitHub Pages on each main push. Verify the Pages run and live routes afterward.
- No Firebase config files or Firebase deploy scripts are checked into this docs repository. GitHub Pages is the only configured deployment target. No product copy rewrite belongs in a package-maintenance pass.

Fleet state and 30-day eligibility: `/home/ahsan/Documents/01-code/docs/tracking/fleet-maintenance-tracker.json` and `project-context-budget-tracker.json`. Keep this guide and `CLAUDE.md` byte-identical. Do not merge the private `project-root` branch into either product main branch.

## Stop-work Git gate

<!-- RULE:stop-work-git-gate v2026-10-20 -->

Before stopping, commit every legitimate change and work-progress checkpoint in this repository and each independent nested repository, fetch and merge the designated upstream, push the documented working branch, then verify an empty worktree and `0 0` ahead/behind. Never stash, discard, reset, rebase, or force-push. If synchronization is blocked, report the exact repository, branch, blocker, and next action instead of calling the work complete. The full workflow remains authoritative in `~/.claude/rules/git-workflow.md`.
