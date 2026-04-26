# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Session context

This repo is operated by a **daily cron job** in Claude Code Cloud. Each session starts with a fresh clone — gitignored files (`AGENTS.md`, `MEMORY.md`, `IDENTITY.md`, `HEARTBEAT.md`, `SOUL.md`, `TOOLS.md`, `USER.md`, `memory/`) do NOT persist across sessions. Anything you need a future session to remember must be committed (here, in README.md, or in another tracked file).

The default daily task is: **add 3 new useful client-side dev tools** that don't duplicate any of the existing 687+. Each tool ships, then the index and README are updated to match.

## Repo shape

- Static GitHub Pages site at `https://stevenli-phoenix.github.io/toolbox/`. No build, no bundler, no tests, no lint. Pure HTML/CSS/JS.
- Every tool is a single self-contained `*.html` file at the repo root. JS lives inline in `<script>` tags. Styling pulls from `toolbox.css` (shared design system: `--bg`, `--surface`, `--surface2`, `--border`, `--text`, `--muted`, `--accent`, `--success`, `--warning`, `--error`, `--mono`, `--sans`, `--radius`).
- `index.html` is the catalog: hand-edited HTML grouped into named categories (`json-and-data`, `css-and-styling`, `images-and-media`, `text-and-writing`, `encoding-and-crypto`, `http-and-apis`, `developer-tools`, `ai-and-pm-tools`, `productivity`, `git-and-workflow`). Each category has a `<span class="cat-count">N</span>` that must be incremented when a tool is added.
- The page header has a total tool count in 3 places: `<title>`, `<meta name="description">`, and `<p class="sub">`. All three must be kept in sync.
- `README.md` mirrors the catalog as Markdown tables grouped by the same categories. New tools get a row in the matching table.
- `vercel.json` sets security headers (`X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`). Don't break those.

## Adding a new tool — checklist

1. Create `<slug>.html` at repo root. Skeleton:
   - `<title>… — Free Online Tool</title>`, `<meta name="description">`, `<meta name="keywords">`, `<link rel="canonical" href="https://stevenli-phoenix.github.io/toolbox/<slug>.html">`.
   - `<link rel="stylesheet" href="toolbox.css">` (then any tool-specific `<style>`).
   - Body: `<div class="container"><a href="index.html" class="back">&larr; All Tools</a><h1>…</h1><p class="subtitle">…</p>` then `.card` blocks.
   - Footer: `Built with &#9749; by <a href="https://buymeacoffee.com/stevenli.phoenix">Steven Li</a> &middot; No data leaves your browser`.
   - Inline `<script>` — no external JS, no fetch to non-public-CDN endpoints. Keep it 100% client-side.
2. Look at `atbash.html`, `anagram.html`, or any recent tool for the canonical pattern before inventing a new one.
3. Add a `<a class="card" href="<slug>.html"><div class="emoji">…</div><h2>…</h2><p>…</p></a>` line in the matching `<div class="category">…</div>` block of `index.html`.
4. Increment the category's `cat-count` and the global tool count in the three header spots.
5. Add a row to the matching table in `README.md`.
6. Verify no existing tool covers the same ground (`grep -E '^<slug>' /tmp/existing` after `ls *.html | xargs -n1 basename | sort > /tmp/existing.txt`).

## Commit style

Commit messages on this repo use imperative present tense, list each tool added, and end with the Claude Code session URL. Recent example:

> `Add Redis Command Builder, CSS Grid Generator, and Network Latency Calculator tools (#473)`

Sign-off the body with `https://claude.ai/code/session_<id>` on the final line.

## Pushing — the cron-session quirk

The cloud cron environment ships a `git` remote pointing at a local proxy (`http://local_proxy@127.0.0.1:<port>/git/StevenLi-phoenix/toolbox`). **The proxy denies push** for cron sessions with `403 Permission to StevenLi-phoenix/toolbox.git denied to StevenLi-phoenix`. The GitHub MCP integration also lacks `contents: write` on this repo (`403 Resource not accessible by integration`).

To push successfully, repoint origin at github.com and authenticate with the user's PAT (which the cron job injects into the environment as `GITHUB_PAT`):

```bash
REPO_PATH=$(git remote get-url origin | sed -E 's|https?://[^/]+/||' | sed 's|^git/||')
git remote set-url origin "https://github.com/${REPO_PATH}"
git config --global url."https://oauth2:${GITHUB_PAT}@github.com/".insteadOf "https://github.com/"
git config --global user.name "StevenLi-phoenix"
git config --global user.email "StevenLi-phoenix@users.noreply.github.com"
git push -u origin <branch>
```

If `GITHUB_PAT` is not set, stop and report — don't loop on the proxy 403, retries don't help.

## Push target

The user has authorized **pushing daily tool additions directly to the default branch** (fast-forward from the feature branch). The default branch on origin is **`main`** (renamed from `master` upstream — `git push origin master` will silently land on `main` and create a stale `master` ref). Standard flow:

1. Develop on the assigned feature branch (e.g. `claude/<adjective>-<scientist>-<id>`).
2. Commit there.
3. Fetch and fast-forward locally, then push to `main` explicitly:
   ```bash
   git fetch origin main
   git checkout master  # local working branch is still named master
   git merge --ff-only <branch>
   git push origin master:main
   ```
4. After pushing, also delete the feature branch on origin (`git push origin --delete <branch>`) so it doesn't pile up.

Skip the PR review for the daily-tool flow unless the user explicitly asks for one.

## Things to avoid

- Don't create a build step, framework dependency, or external script tag for any tool — this site is purposefully zero-dependency client-side.
- Don't reorder or rename existing tools; the slugs are public URLs.
- Don't update the `269 free, client-side developer tools` line in the README's intro paragraph — it's stale on purpose (the catalog table has the real list, and the user has not asked to fix the headline).
- Don't try to paginate `mcp__github__list_branches` looking for the feature branch on a fresh push — cron-created branches won't exist on the remote until after the first successful `git push`.
