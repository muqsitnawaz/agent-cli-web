# agents-cli Design

Visual system for the `agents-cli` web property. Companion to [BRAND.md](./BRAND.md) — BRAND covers voice; DESIGN covers spacing, components, and the rules a designer or page author needs to lay out a surface without breaking the system.

The aesthetic target is "the docs site of a tool you already trust." References: `htmx.org`, `sqlite.org`, the README pages of `ripgrep` and `fd` on GitHub. Quiet, dense, monospace-leaning, no chrome that does not serve a function.

---

## Foundation

### Color (mirrors `app/globals.css`)

| Token | Hex | Where |
| --- | --- | --- |
| `--color-bg` | `#0b0d0e` | Page background, `<html>`, `<body>` |
| `--color-fg` | `#e6edf3` | Primary text |
| `--color-muted` | `#7d8590` | Secondary text, captions |
| `--color-accent` | `#39d353` | Single CTA, focus ring, prompt glyph |
| `--color-border` | `#21262d` | Borders, dividers |
| `--color-panel` | `#111315` | Code block / card surface, one shade above `bg` |

Tailwind reads these as `bg-bg / text-fg / text-muted / bg-accent / border-border` via the `@theme` block. Do not introduce a sixth hue. If you need a state color (warning, error), come back here first and add it to the table.

### Type

- Body: `Inter`, fallback to system sans.
- Mono: `JetBrains Mono`, fallback to `ui-monospace`, `SFMono-Regular`, `Consolas`.
- The site self-hosts fonts where available; no Google Fonts CDN.

The body face is sans because we are not Rush. The mono face is the one that carries the brand — every code block, the wordmark, file paths, hex tokens. When in doubt about whether to use mono, use mono.

### Spacing

Tailwind scale, restricted to: `2, 3, 4, 6, 8, 10, 12, 16, 20, 24`. Section padding is `py-16` minimum on desktop. Vertical rhythm between paragraphs is the Tailwind prose default — do not customize `line-height` per block.

### Radius

- `0px` — code blocks and the install bar (terminal-coded; rounded code looks like Notion)
- `2px` — buttons, panels, cards
- Never `rounded-2xl`. Never `rounded-full` except on the `>` favicon glyph.

### Borders

Hairline. `1px solid var(--color-border)`. No drop shadows. No glow. No outer-ring focus state — focus is `2px solid var(--color-accent)` directly on the element.

---

## Components

### Nav

- Sticky top, full-width, `border-bottom: 1px solid border`.
- Left: wordmark `agents-cli` in mono `font-weight: 600`.
- Right: links in `muted`; current page in `fg`; hover transitions `color` only, no underline.
- Height `64px`. Padding `px-6`.

### Hero

- Two-column on `lg`: copy left, terminal preview right.
- Left column: eyebrow chip (border + icon + text), wordmark display, one-sentence subhead in `muted`, install command in a `<pre>` panel, CTA button.
- Right column: a `<pre>` with three example commands. Looks like a terminal frame. No window chrome (no fake macOS traffic lights — that's the `htmx` discipline).

### Install bar

```
<pre class="border border-border bg-black px-4 py-3 text-sm text-fg">
  <code>bun install -g @phnx-labs/agents-cli</code>
</pre>
```

Black, not `panel`. The install bar is the one place a terminal-true background is correct.

### CTA button

- Primary: `bg-accent text-bg font-semibold px-4 py-3 text-sm`. Square corners. One per surface.
- Secondary: `border border-border text-fg`. Same shape.

### Code block

- `<pre>` with `border border-border bg-panel`.
- Padding `px-4 py-3`.
- `JetBrains Mono` at `14px / 1.6`.
- Horizontal scroll, never wrap.

### Inline `<code>`

- `bg-panel text-fg` with `px-1.5 py-0.5`, no border.
- Reserve `text-accent` for the prompt glyph (`$`, `>`) only.

### Docs page shape

- `<Nav />`
- `<main class="mx-auto max-w-3xl px-6 py-16">`
  - `<h1>` `text-4xl font-semibold`
  - `<p class="text-muted mt-2">` one-sentence definition
  - prose / code / prose / code
- `<Footer />`

Max width is `3xl` (768px). Reading line length is the constraint. No two-column docs layout — sidebars are deferred until we have more than ten pages.

---

## Iconography

- Lucide React at `stroke-width: 1.5` (not 2).
- 16px default, 20px in nav, 24px in feature panels.
- Active icons in use: `Terminal, PanelsTopLeft, KeyRound, ClipboardList, ArrowRight`. Add to this set only when an affordance genuinely needs one.
- Never use AI-themed glyphs: no `Sparkles`, no `Bot`, no `Wand2`, no `Brain`. The brand is a terminal, not a chat product.
- Never fill an icon. Stroke only.

The accent color may color exactly one icon per surface — the eyebrow glyph next to the chip. Everything else is `fg` or `muted`.

---

## Layout grid

- Container: `mx-auto max-w-6xl px-6`.
- Hero uses two columns on `lg`: `grid-cols-[1.15fr_0.85fr]`. The slight asymmetry keeps the copy column dominant.
- Feature row uses three columns on `md`, equal weight. (We tolerate the three-equal-columns layout here because it accurately reflects the three-way symmetry of the product surface: browser, secrets, sessions.)

---

## Motion

- Hover: `transition-colors` only. 150ms ease-out. No transform, no scale.
- No spring physics. No bounces. No staggered reveals on scroll.
- No animated borders, no shimmer, no aurora gradients. Anything that "feels alive" is wrong here.

---

## What we do not ship

- No hero gradient. The page background is one flat color.
- No glass cards. `backdrop-blur` is banned. We are not Vercel.
- No "ship faster" stopwatch animation.
- No marketing video autoplay. If there is a demo, it is a static `<video controls preload="none">`.
- No cookie banner. No analytics modal. No newsletter popup. No floating chat widget.

If a design move would look at home on a Series-A SaaS landing page, it does not belong here.
