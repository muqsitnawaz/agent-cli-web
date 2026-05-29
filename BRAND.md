# agents-cli Brand

Voice and look for `agents-cli` and its docs site. Read this before writing any user-facing string or designing any surface. Treat it as constraint, not suggestion.

This is not Rush. Rush is editorial — gold on void, EB Garamond display, falcon iconography. `agents-cli` is a CLI. The brand should feel like the tools its users already trust: `htmx`, `sqlite`, `jq`, `ripgrep`, `git`. Confident. Minimal. Technical. The product is the product.

---

## Voice

### One-sentence summary

> Reads like the man page of a tool you already trust.

### Voice principles

1. **State the command.** Show what runs, what gets created, what gets read. `agents browser create-profile linear-prod` beats "create a named identity for browsing."
2. **No marketing verbs.** Banned: *supercharge, unleash, transform, empower, accelerate, revolutionize, 10x*. They make a CLI sound like a SaaS dashboard.
3. **No futurism.** This is a binary on your `PATH`. It is not "the future of AI tooling." Describe what it does in present tense.
4. **Be precise about scope.** "Stored in macOS Keychain, owner-readable only (0600)" beats "secure." If it's hard, say so. If it's macOS-only, say so.
5. **Plain English over jargon, but jargon over euphemism.** Say `stdout`, `tty`, `cdp`, `keychain`, `cookie jar`. Don't dumb them down. Do not say "easy" or "simply" — those words hide complexity.
6. **One command per paragraph.** Prose introduces a command; the command pays the prose off. Then move on.
7. **No exclamation points.** Outside dialogue, ever.
8. **No emoji.** Anywhere. README, docs, error messages, commit messages.

### Vocabulary

**Approved nouns:** profile, bundle, session, run, task, tab, shim, version, manifest, keychain, project, repo, harness, hook, skill, command, route, exec.

**Approved verbs:** install, run, exec, pin, sync, route, dispatch, inject, attach, start, stop, list, view, create, add, rotate, archive, resolve.

**Banned verbs (marketing leakage):** *supercharge, unleash, empower, leverage, accelerate, transform, revolutionize, democratize, disrupt, synergize, optimize*.

**Banned nouns / phrases:**
- *AI assistant* — use `agent` or the agent's name (`claude`, `codex`).
- *intelligent automation, AI-powered, next-generation* — empty.
- *seamless, intuitive, easy, simple* — claim it by being it.
- *workflow tool, productivity suite* — wrong category.
- *your team* — that's Rush. `agents-cli` is per-developer infrastructure.

**Use with caution:**
- *toolchain* — the tagline word; use sparingly elsewhere.
- *missing* — only in the tagline; avoid in body copy.

### Tagline canon

- **Primary:** `the missing toolchain for CLI coding agents`
- **Short (badge / bio):** `agents-cli — toolchain for CLI coding agents`
- **One-liner subhead:** "Sessions, browser, secrets, versions. One install. macOS and Linux."

Tagline rules: lowercase, no terminal period, no exclamation. The word `toolchain` is the load-bearing noun — it tells the reader this is plumbing, not a product.

### Sample copy (the good kind)

- "First run creates an isolated `default` profile backed by bundled Chromium."
- "API keys live in Keychain. Bundle definitions live in Keychain. Nothing about secrets touches disk in plaintext."
- "Two agents, two profiles, no shared state."
- "Pin versions per project. `agents.yaml` at repo root, same shape as `.nvmrc`."

### Sample copy (the bad kind — do not write this)

- ~~"Supercharge your AI workflow with agents-cli"~~
- ~~"The seamless, intuitive way to manage your AI agents"~~
- ~~"Unleash the power of multiple coding agents in one beautiful interface"~~
- ~~"Built for the future of work"~~

---

## Color tokens

Terminal-coded, because `agents-cli` is a terminal native. We do not compete with Rush's gold-on-void.

| Token | Hex | Use |
| --- | --- | --- |
| `bg` | `#0b0d0e` | Page background. Near-black with a faint green-cool tint. |
| `fg` | `#e6edf3` | Primary text on `bg`. Off-white, GitHub-dark-coded. |
| `muted` | `#7d8590` | Secondary text, captions, inactive nav, prose subhead. |
| `accent` | `#39d353` | One CTA per surface. Terminal prompt green. |
| `border` | `#21262d` | Card edges, dividers, input borders, code-block frames. |
| `panel` | `#111315` | Subtle panel surface (one shade above `bg`). |

**Why green, not yellow.** Both `#39d353` and `#f1fa8c` survived screening. Green wins because:

1. It is the literal terminal "OK" color — the cursor, the prompt success, the `git status` clean state. It signals correctness, which is the product's claim.
2. Yellow leans warm and editorial; warmth puts us in Rush's neighborhood. The whole point of this brand is to be distinguishable from Rush.
3. Green is unowned among comparable developer tools: `htmx` is blue, `jq` is hot pink, `sqlite` is unbranded, `ripgrep` has no color. Picking green stakes a small, recognizable territory.

**Accent discipline.** `accent` is for one element per view — the install CTA, the active nav item, an inline `<code>` highlight when it must pop. Never on borders. Never on body text. Never on more than one place per surface.

---

## Type stack

| Slot | Family | Where |
| --- | --- | --- |
| Body | `Inter`, system sans | Prose, headings, nav |
| Code | `JetBrains Mono`, `ui-monospace`, `SFMono-Regular` | All `<code>`, `<pre>`, file paths, hex tokens, the wordmark |
| Display | Same as body, weight `600` | Hero headline (the wordmark is mono; the subhead is sans) |

The wordmark `agents-cli` is rendered in mono, lowercase, no decoration. It looks like a binary on `PATH` because it is one.

Type scale (canonical — do not improvise sizes outside this list):

| Token | Size / line | Use |
| --- | --- | --- |
| `display` | 48 / 1.1 | Hero only |
| `h1` | 32 / 1.2 | Docs page title |
| `h2` | 20 / 1.4 | Docs section heads |
| `body` | 15 / 1.7 | Prose |
| `mono` | 14 / 1.6 | Code blocks |
| `caption` | 13 / 1.5 | Captions, footnotes |

---

## Wordmark

- Spelling: `agents-cli`. Always lowercase. Hyphenated. Never `Agents CLI`, never `AgentsCLI`, never `agents`.
- Set in `JetBrains Mono` `font-weight: 600`.
- Color: `fg` on `bg`. Never on accent.
- No logotype glyph. The wordmark *is* the logo for the web property. (The CLI binary itself is `agents` for ergonomics.)

## Favicon

- 32×32 SVG: a single `>` glyph in `accent` on `bg`, mono, no background shape.
- The favicon is the terminal prompt. Nothing else.

---

## What we are not

- We are not Rush. No gold, no falcons, no Cormorant, no EB Garamond, no editorial photography.
- We are not Vercel. No purple-cyan gradients, no glass cards, no "ship faster" framing.
- We are not Linear. No mint/lime accents, no soft-pastel illustration.
- We are not Anthropic.com. No serif marketing prose, no claude-the-author quotes.

We are: a command-line tool's website. The closest reference points are `htmx.org`, `sqlite.org`, `git-scm.com`, `ripgrep`'s GitHub README. Functional, technical, low-chrome.
