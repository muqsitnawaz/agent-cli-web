# Changelog

All notable changes to agent-cli-web. Format: [keepachangelog](https://keepachangelog.com/en/1.1.0/). Versions follow [SemVer](https://semver.org/).

## 0.1.0 — 2026-05-29

Initial public release. Site live at https://agents-cli.sh.

### Added
- Next.js 15 + Bun + Tailwind v4 scaffold (static export via `output: 'export'`).
- Brand discipline: `BRAND.md`, `DESIGN.md`, `ANTI_TELLS.md` — terminal-coded palette with `#39d353` accent.
- Docs pages: `/docs/browser-profiles`, `/docs/secrets` (emphasizing `agents secrets exec`), `/docs/tabs`.
- Public install script at `/install.sh` for `curl -fsSL agents-cli.sh/install.sh | bash`.
- Canonical `scripts/{install,build,test,release}.sh` per the project scripts contract.
- Deployment target: Cloudflare Pages with custom domain `agents-cli.sh`.

### Notes
- Route pattern A: root `/` serves the docs site; `/install.sh` serves the install script as a static asset. Existing `curl agents-cli.sh | bash` calls (no path) will receive HTML and fail — instruct users to use `agents-cli.sh/install.sh`.
