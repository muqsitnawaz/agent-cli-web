# Anti-tells — patterns that scream "AI design"

Read this before producing anything for the `agents-cli` web property. If your output matches any line below, rework before shipping.

The rules apply both to AI-generated drafts and to humans editing the site directly. The brand is "looks like a tool a senior engineer trusts." Every tell below moves it toward "looks like another AI startup landing page."

---

## Copy tells

| Tell | Why it screams AI | Do instead |
| --- | --- | --- |
| **"Supercharge your X"** | Microsoft Copilot's verb; every AI-tool 2023–2025 copies it. | State what runs. `agents-cli` is a CLI; describe the command. |
| **"Build the future of X"** | LLM tagline default. Says nothing. | Describe the present-tense behavior. `the missing toolchain for CLI coding agents`. |
| **"10x your productivity"** | Y-Combinator pitch deck cliché; meaningless. | A real metric or none at all. |
| **"Just" / "simply" hedging** ("just run...", "simply install...") | Hides complexity; AI loves these because the model can't tell what's hard. | Cut every "just" and "simply". State the command. |
| **Adjective stacks** ("beautiful, intuitive, powerful, seamless") | Every AI product page's About section. | Cut the adjectives. Replace with verbs and behavior. |
| **"Built for X. By Y."** sign-off | LLM closing tic. | A repo link or a real anecdote. |
| **Em-dash overload** — every other clause — has — these | LLMs reach for em-dashes 3-5× more than human prose. | One em-dash per paragraph maximum. Use a period. |
| **`*italic*` for emphasis in body prose** | Markdown-render reflex. | Bold sparingly, or restructure so emphasis isn't needed. |
| **Headlines ending with a period** | LLM default. Real headlines don't (Stripe, NYT, Linear, Apple). | Drop the terminal period. |
| **`X · Y · Z` middle-dot list separators** in headings | Claude/ChatGPT tic. | Commas, slashes, or a single `|`. Middle dot is fine inside timestamps (`12:34 · 5m`) only. |
| **"Your AI assistant" / "Your AI workflow" / "Your AI X"** | Generic Cluster B tagline mill. | Name the tool: `agents-cli`. Name the agent: `claude`, `codex`. |
| **Virtue signals: "thoughtfully designed", "obsessive attention to detail"** | LLM padding. | Show the detail; don't claim it. |

## Visual tells

| Tell | Why it screams AI | Do instead |
| --- | --- | --- |
| **Diagonal hero gradient** (purple→pink, blue→cyan, indigo→teal) | Vercel + every AI startup landing page 2023-2026. | Solid `bg`. One color. The terminal is monochrome and so are we. |
| **Glassmorphism cards** (`backdrop-filter: blur(28px)` + 8% white) | Apple Vision marketing → every AI vibey landing. | Solid `panel` with a 1px `border`. See [DESIGN.md](./DESIGN.md). |
| **`rounded-2xl` + soft drop shadow on every component** | Tailwind UI's "AI vibes" preset. | `2px` radius on buttons/cards, `0` on code blocks. No drop shadows. |
| **Animated gradient borders / conic spin on inputs** | "Magic" treatment used by every AI chat product. | Hairline border or nothing. |
| **Neon / RGB / synthwave palette** | Cyberpunk-AI cosplay. | Terminal palette: near-black + off-white + one green accent. |
| **Three-column feature grid: icon + heading + two-line body** | Tailwind marketing template, default AI-landing layout. | We use it once on the hero feature row because the three product surfaces actually are symmetric. Do not repeat the pattern anywhere else on the site. |
| **Hero pattern: giant headline + subtle subhead + glowing CTA** | Vercel/Linear template. | The hero is allowed but the CTA is `accent` (flat green), not glowing, and a `<pre>` terminal preview sits next to the headline. |
| **Sparkle / star / wand glyphs on AI features** | Self-conscious AI product UI. | Lucide icons from the approved set ([DESIGN.md](./DESIGN.md)) only. No `Sparkles`, no `Wand2`, no `Bot`. |
| **Robot logos, chrome heads, glowing brains** | The single most-overused AI-logo trope. | The favicon is a `>` glyph. The wordmark is `agents-cli` in mono. That is the logo. |
| **Iridescent / holographic hero objects** | Midjourney default style. | No hero illustration. The hero is text + a terminal preview. |
| **AI-generated faces in testimonials** | Uncanny artifacts; obvious. | No faces. No testimonials section yet. When we add one, use a real screenshot of a real PR. |

## Code-block tells

| Tell | Why it screams AI | Do instead |
| --- | --- | --- |
| **Fake macOS traffic-light window chrome** around code samples | Cursor / Replit / every AI-IDE landing page. | Plain `<pre>` with a 1px border. The code is the chrome. |
| **Syntax highlighting in 6 colors on a landing page code block** | VS Code screenshot cosplay. | Monochrome `fg` on `panel`. The terminal doesn't highlight; neither do we. |
| **A blinking cursor `▮` after the last line** | "Look, it's live!" tic. | No cursor. The block is static. |
| **`$` prompts inconsistently included** ("$ npm install" on one line, raw on the next) | LLM forgets the convention mid-snippet. | Pick one. We include `$` only when the snippet mixes commands and output. Otherwise, no prompt. |

## Motion tells

| Tell | Why it screams AI | Do instead |
| --- | --- | --- |
| **Spring physics on every hover** (bouncy `transition: all`) | Framer Motion default. | Linear ease-out, 150ms, color-only. |
| **Number counters that tick up on scroll** | Marketing-page cliché. | Show the number. |
| **Particle / sparkle / "magic" trails** | AI-product launch trope. | None. |
| **Scroll-jacked horizontal sections** | "Modern" but disorienting. | The page scrolls vertically. End of spec. |

---

## How to use this doc

- Before writing copy: read the **Copy tells** table. If your draft uses any banned phrase or pattern, rewrite.
- Before designing a surface: read **Visual tells** and **Code-block tells**.
- Before adding motion: read **Motion tells**. The default position is "no motion."
- When in doubt, open the README of `ripgrep` on GitHub, or `htmx.org`, or `sqlite.org`. Those are the reference surfaces.

## Adding a new tell

Found a new AI-design pattern in the wild? Add a row. Each row needs:

- **The tell** — describe it concretely.
- **Why it screams AI** — what's the source (which product, which template, which model's default).
- **Do instead** — the brand-correct alternative with a [DESIGN.md](./DESIGN.md) or [BRAND.md](./BRAND.md) anchor when one exists.

Don't add a tell without the "do instead" — rules without alternatives are noise.
